import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddMovieComponent } from 'src/app/components/add-movie/add-movie.component';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogService],
})
export class HomeComponent implements OnInit {
  movies!: any[]
  loading: boolean = false
  ref!: DynamicDialogRef
  category!: number
  constructor(private moviesService: MoviesService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.listMovies()
  }

  listMovies() {
    this.loading = true;
    this.moviesService.listMovies().subscribe((output) => {
      this.loading = false;
      if(output.status === 'success') {
        this.movies = output.message
      } else {
        console.log(output);
      }
    }, (error) => {
      this.loading = false;
      console.log(error);
    })
  }


  addDialog() {
       this.ref = this.dialogService.open(AddMovieComponent, {
          header: 'Add Movie',
          width: '70%',
          contentStyle: { 'max-height': '600px', overflow: 'auto' },
          baseZIndex: 10000,
          dismissableMask: true,
      });

      this.ref.onClose.subscribe((data) => {
        if (data) {
          this.movies.push(data.movie) 
        }
      });

  }

  handleNewMovies(event: any) {
    this.movies = event
  }

  filter() {
    this.loading = true;
    this.moviesService.listByCategory(this.category).subscribe((output) => {
      this.loading = false;
      if(output.status === 'success') {
        this.movies = output.message
        console.log(output);
      }
    }, (error) => {
      this.loading = false;
      console.log(error);
    })
  }
}
