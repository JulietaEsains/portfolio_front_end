import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio_front_end';
  darkMode: boolean = false
  currentTheme: string | null = 'light'
  subscription?: Subscription

  constructor(
    private uiService: UiService
  ) {
    this.uiService.getCurrentTheme().subscribe(value => this.darkMode = value)
  }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('selected-theme')
    this.darkMode = this.currentTheme == 'dark' ? true : false
  }
}
