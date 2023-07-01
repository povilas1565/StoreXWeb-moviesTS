import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PrimengModule } from 'src/app/primeng.module';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { AddMovieComponent } from 'src/app/components/add-movie/add-movie.component';
import { EditMovieComponent } from 'src/app/components/edit-movie/edit-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MovieCardComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule
  ]
})
export class UserModule { }
