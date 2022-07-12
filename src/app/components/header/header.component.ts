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
  editMode: boolean = false
  isLoginModalActive: boolean = false
  currentTheme: string | null = 'light'
  subscription?: Subscription

  constructor(
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('selected-theme')
    this.darkMode = this.currentTheme == 'dark' ? true : false
    this.uiService.getCurrentTheme().subscribe(value => this.darkMode = value)
    this.editMode = localStorage.getItem('edit-mode') == 'on' ? true : false
    this.uiService.isEditModeOn().subscribe(value => this.editMode = value)
    this.uiService.getIsLoginModalActive().subscribe(value => this.isLoginModalActive = value)
  }

  toggleTheme() {
    this.uiService.toggleTheme().subscribe(value => this.darkMode = value)
  }

  toggleLoginModal() {
    this.uiService.toggleLoginModal().subscribe(value => this.isLoginModalActive = value)
  }

  logout() {
    this.uiService.toggleEditMode()
    localStorage.setItem('edit-mode', 'off')
    location.reload()
  }
}
