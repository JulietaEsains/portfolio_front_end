import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http: HttpClient
  ) { }

  getHomeData(): Observable<any> {
    return this.http.get('../assets/data/home.json')
  }
}
