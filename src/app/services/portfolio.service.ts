import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
  httpOptions = {
    headers: this.headers
  }

  private apiUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getData(dataType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${dataType}`)
  }

  // deleteInstance(dataType: string, id: number): Observable<any> {
  //   const url: string = `../assets/data/${dataType}.json`
  //   return this.http.delete(url, this.httpOptions)
  // } 
}
