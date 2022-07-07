import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
  httpOptions = {
    headers: this.headers
  }

  private apiUrl = 'http://localhost:3000/home'

  constructor(
    private http: HttpClient
  ) { }

  updateHomeText(home: Home): Observable<Home> {
    return this.http.put<Home>(this.apiUrl, home, this.httpOptions)
  } 
}
