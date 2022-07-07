import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutMe } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
  httpOptions = {
    headers: this.headers
  }

  private apiUrl = 'http://localhost:3000/about-me'

  constructor(
    private http: HttpClient
  ) { }

  updateAboutMeDescription(aboutMe: AboutMe): Observable<AboutMe> {
    return this.http.put<AboutMe>(this.apiUrl, aboutMe, this.httpOptions)
  } 
}
