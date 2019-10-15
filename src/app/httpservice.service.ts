import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) {

  }
  addUser(data: any) {
    return this.http.post(environment.apiURL + 'register', data);
  }

  checkUser(data: any) {
    return this.http.post(environment.apiURL + 'login', data);
  }
}
