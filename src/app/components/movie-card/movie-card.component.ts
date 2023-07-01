import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  providers: [DialogService]
})
export class MovieCardComponent implements OnInit {
  @Input() movies: any;
  @Output() newMovies = new EventEmitter<any>();

  ref!: DynamicDialogRef;
  constructor( public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  editMovie(movie: any) {
   this.ref = this.dialogService.open(EditMovieComponent, {
      width: '70%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      baseZIndex: 10000,
      dismissableMask: true,
      data: {
        movie
      }
    })

    this.ref.onClose.subscribe(({data, method}) =>{
      console.log("🚀 ~ file: movie-card.component.ts ~ line 52 ~ MovieCardComponent ~ this.ref.onClose.subscribe ~ data", data)

      if (data && method=='delete') {
        this.movies = this.movies.filter((movie: any) => {
          return movie.id != data
        })
          console.log("🚀 ~ file: movie-card.component.ts ~ line 37 ~ MovieCardComponent ~ this.movies=this.movies.filter ~ this.movies", this.movies)

        this.newMovies.emit(this.movies)
      }

      else if(data && method=='update') {
        const updateMovieIndex = this.movies.findIndex((movie: any) => {
          return movie.id === data.id;
        });
        
        this.movies[updateMovieIndex] = data

        this.newMovies.emit(this.movies)
      }
  }) }
}
