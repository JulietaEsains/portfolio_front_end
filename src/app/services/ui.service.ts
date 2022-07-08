import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private darkMode: boolean = false
  private subject = new Subject<any>()

  constructor() { }

  toggleTheme(): void {
    this.darkMode = !this.darkMode
    localStorage.setItem('selected-theme', (this.darkMode ? 'dark' : 'light'))
    this.subject.next(this.darkMode)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
