import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editMode: boolean = false
  home: Home = {
    bannerSrc: '',
    title: '',
    subtitle: '',
    description: ''
  }

  constructor(
    private uiService: UiService,
    private portfolioService: PortfolioService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.getHomeData()
    this.uiService.isEditModeOn().subscribe(value => this.editMode = value)
    this.editMode = localStorage.getItem('edit-mode') == 'on' ? true : false
  }

  getHomeData() {
    this.portfolioService.getData('home').subscribe(data => this.home = data)
  }

  updateHomeText() {
    this.router.navigate(['/update-home'])
    this.getHomeData()
  }
}
