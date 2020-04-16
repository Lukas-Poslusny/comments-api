import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import AccessToken from '../AccessToken';
import { ReturnedData } from '../return-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://85.160.64.233:3000/';
  accessToken: string;
  

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser() {
    return this.httpClient.get<ReturnedData>(this.url);
  }

  deleteUser() {
    const headers = new HttpHeaders().set('User-Token', AccessToken.token);
    return this.httpClient.delete(this.url, {headers});
  }

  registerUser(username1, email1, password1, checkpassword) {
    return this.httpClient.post(this.url + 'session/register', {
      username: username1,
      email: email1,
      password: password1,
      password_confirmation: checkpassword
    });
  }

  loginUser(email1, password1) {
    let body = {
      email: email1,
      password: password1}
    return this.httpClient.post<ReturnedData>(this.url + 'session/login', body, {
      observe: "response"
    });
  }
}
