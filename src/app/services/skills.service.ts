import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Skill, SkillTab } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
  httpOptions = {
    headers: this.headers
  }

  private apiUrl = 'http://localhost:3000/skillTabs'

  constructor(
    private http: HttpClient
  ) { }

  getSkillTabToUpdate(tabId: number): Observable<SkillTab> {
    return this.http.get<SkillTab>(`${this.apiUrl}/${tabId}`)
  }

  updateSkillTab(skillTab: SkillTab, newSkills: Skill[]): Observable<SkillTab> {
    return this.http.put<SkillTab>(`${this.apiUrl}/${skillTab.id}`, {
      title: skillTab.title,
      iconClass: skillTab.iconClass,
      skills: newSkills,
      open: true
    })
  }
}
