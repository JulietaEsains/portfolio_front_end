import { Component, OnInit } from '@angular/core';
import { Section, SECTIONS } from 'src/app/sections';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  sections: Section[] = SECTIONS
  darkMode: boolean = false
  currentTheme: string | null = 'light'
  subscription?: Subscription

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.darkMode = value
    })
  }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('selected-theme')
    this.darkMode = this.currentTheme == 'dark' ? true : false
  }

  toggleTheme() {
    this.uiService.toggleTheme()
  }

}
