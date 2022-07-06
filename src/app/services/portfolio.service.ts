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

  getAboutMeData(): Observable<any> {
    return this.http.get('../assets/data/about-me.json')
  }

  getSkillsData(): Observable<any> {
    return this.http.get('../assets/data/skills.json')
  }

  getQualificationData(): Observable<any> {
    return this.http.get('../assets/data/qualification.json')
  }

  getProjectsData(): Observable<any> {
    return this.http.get('../assets/data/projects.json')
  }

  getContactData(): Observable<any> {
    return this.http.get('../assets/data/contact.json')
  }

  getFooterData(): Observable<any> {
    return this.http.get('../assets/data/footer.json')
  }
}
