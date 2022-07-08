import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
  httpOptions = {
    headers: this.headers
  }

  private apiUrl = 'http://localhost:3000/projects'

  constructor(
    private http: HttpClient
  ) { }

  deleteProject(projectId: number | undefined): Observable<Project> {
    return this.http.delete<Project>(`${this.apiUrl}/${projectId}`, this.httpOptions)
  }
}
