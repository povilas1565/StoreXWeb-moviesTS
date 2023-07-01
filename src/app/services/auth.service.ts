import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userLogin, userRegisterInputs } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(inputs: userRegisterInputs): Observable<any> {
    return this.httpClient.post(`${environment.api_domain}/api/register`, inputs)
  }

  login(inputs: userLogin): Observable<any> {
    return this.httpClient.post(`${environment.api_domain}/api/login`, inputs)
  }
}
