import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = []
  user: User = {
    id: 0, username: '', password: ''
  }
  isLoginModalActive: boolean = false

  constructor(
    private uiService: UiService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('users').subscribe(data => this.users = data)
  }

  toggleLoginModal() {
    this.uiService.toggleLoginModal().subscribe(value => this.isLoginModalActive = value)
  }

  login(): void {
    if (!this.user.username || !this.user.password) {
      alert('Por favor llene todos los campos.')
      return
    }

    for (let user of this.users) {
      if (this.user.username == user.username && this.user.password == user.password) {
        this.toggleLoginModal()
        this.uiService.toggleEditMode()
        return
      }
    }

    alert('Credenciales incorrectas. Por favor intente nuevamente.')
  }

}
