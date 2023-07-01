import { Injectable } from '@angular/core';
const JWT_USER_TOKEN_ITEM_KEY = 'user.token'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  
  get() {
    return localStorage.getItem(JWT_USER_TOKEN_ITEM_KEY) 
  }

  set(token: string) {
    localStorage.setItem(JWT_USER_TOKEN_ITEM_KEY, token)
  }
}
