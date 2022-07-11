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

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}`, project, this.httpOptions)
  }

  getProjectToUpdate(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${projectId}`, this.httpOptions)
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project.id}`, project, this.httpOptions)
  }

  deleteProject(projectId: number | undefined): Observable<Project> {
    return this.http.delete<Project>(`${this.apiUrl}/${projectId}`, this.httpOptions)
  }
}
