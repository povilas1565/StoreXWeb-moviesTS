import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie!: any;
  updateMovieCtrl!: FormGroup
  constructor(
    public config: DynamicDialogConfig, 
    private movieService: MoviesService, 
    public ref: DynamicDialogRef,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.movie = this.config.data?.movie;
    console.log("🚀 ~ file: edit-movie.component.ts ~ line 23 ~ EditMovieComponent ~ ngOnInit ~  this.movie",  this.movie)

    this.updateMovieCtrl = this.fb.group({
      name: this.fb.control(this.movie.name, [Validators.required, Validators.minLength(5)]),
      description: this.fb.control(this.movie.description, [Validators.required, Validators.minLength(5)]),
      category_id: this.fb.control(this.movie.category_id, [Validators.required])
    })
  }


  deleteMovie() {
    const inputs = {
      ...this.movie,
      _method: "delete"
    }
    this.movieService.deleteMovie(inputs, this.movie.id).subscribe((output) => {
      this.ref.close({data: this.movie.id, method: 'delete'})
    })
  }

  edit() {
    const inputs ={
      ...this.movie,
      ...this.updateMovieCtrl.value,
      _method: "put"
    }

    this.movieService.updateMovie(inputs, this.movie.id).subscribe((output) => {
      if(output.status === 'success') {
        this.ref.close({data: output.message, method: 'update'})
      }
      else {
        console.log(output);
        
      }
    })
  }
}

