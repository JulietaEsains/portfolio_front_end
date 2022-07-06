import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getData(dataType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${dataType}`)
  }
}
