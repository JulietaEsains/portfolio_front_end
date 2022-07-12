import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qualification, QualificationTab } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  private apiUrl = 'http://localhost:3000/qualificationTabs'

  constructor(
    private http: HttpClient
  ) { }

  getQualificationTabToUpdate(tabId: number | undefined): Observable<QualificationTab> {
    return this.http.get<QualificationTab>(`${this.apiUrl}/${tabId}`)
  }

  updateQualificationTab(qualificationTab: QualificationTab, newQualifications: Qualification[]): Observable<QualificationTab> {
    return this.http.put<QualificationTab>(`${this.apiUrl}/${qualificationTab.id}`, {
      name: qualificationTab.name,
      items: newQualifications
    })
  }
}
