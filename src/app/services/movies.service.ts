import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieCreateInputs, movieUpdateInputs } from '../models/movie.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  token = this.tokenService.get()
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `bearer ${this.token}`
   })
  }

  listMovies(): Observable<any> {
    return this.httpClient.get(`${environment.api_domain}/api/movies`, this.httpOptions)
  }

  listByCategory(category: number): Observable<any> {
    return this.httpClient.get(`${environment.api_domain}/api/moviesByCategory/${category}`, this.httpOptions)
  }

  showMovie(id: number): Observable<any> {
    return this.httpClient.get(`${environment.api_domain}/api/movies/${id}`, this.httpOptions)
  }

  createMovie(inputs: movieCreateInputs): Observable<any> {
    return this.httpClient.post(`${environment.api_domain}/api/movies`, inputs, this.httpOptions)
  }

  updateMovie(inputs: movieUpdateInputs, id: number): Observable<any> {
    return this.httpClient.post(`${environment.api_domain}/api/movies/${id}`, inputs, this.httpOptions)
  }

  deleteMovie(inputs: movieUpdateInputs, id: number): Observable<any> {
    return this.httpClient.post(`${environment.api_domain}/api/movies/${id}`, inputs, this.httpOptions)
  }

}
