import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  MovieCtrl!: FormGroup
  image: any
  constructor(
    public config: DynamicDialogConfig, 
    private movieService: MoviesService, 
    public ref: DynamicDialogRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.MovieCtrl = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      description: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      category_id: this.fb.control('', [Validators.required])
    })
  }

  submit() {
    const inputs = {
      ...this.MovieCtrl.value,
      image: {
        src: this.image.name
      }
    }
    this.movieService.createMovie(inputs).subscribe((output) => {
      if(output.status == 'success') {
        console.log(output);
        
        this.ref.close(output.movie)
      }
      
    })
  }

  onBasicUpload(event: any) {
    this.image = event.target.files[0];
  }
}
