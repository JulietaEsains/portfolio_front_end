import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private darkMode: boolean = false
  private editMode: boolean = false
  private isLoginModalActive: boolean = false
  private darkModeSubject = new Subject<any>()
  private editModeSubject = new Subject<any>()
  private loginModalSubject = new Subject<any>()

  constructor() { }

  getCurrentTheme(): Observable<any> {
    return this.darkModeSubject.asObservable()
  }

  isEditModeOn(): Observable<any> {
    return this.editModeSubject.asObservable()
  }

  getIsLoginModalActive(): Observable<any> {
    return this.loginModalSubject.asObservable()
  }

  toggleTheme(): Observable<any> {
    this.darkMode = !this.darkMode
    localStorage.setItem('selected-theme', (this.darkMode ? 'dark' : 'light'))
    this.darkModeSubject.next(this.darkMode)
    return this.darkModeSubject.asObservable()
  }

  toggleEditMode(): Observable<any> {
    this.editMode = !this.editMode
    localStorage.setItem('edit-mode', (this.editMode ? 'on' : 'off'))
    this.editModeSubject.next(this.editMode)
    return this.editModeSubject.asObservable()
  }

  toggleLoginModal(): Observable<any> {
    this.isLoginModalActive = !this.isLoginModalActive
    this.loginModalSubject.next(this.isLoginModalActive)
    return this.loginModalSubject.asObservable()
  }
}
