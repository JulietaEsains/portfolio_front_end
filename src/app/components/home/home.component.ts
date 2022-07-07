import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/interfaces';
import { HomeService } from 'src/app/services/home.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home = {
    bannerSrc: '',
    title: '',
    subtitle: '',
    description: ''
  }

  constructor(
    private portfolioService: PortfolioService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getHomeData()
  }

  getHomeData() {
    this.portfolioService.getData('home').subscribe(data => this.home = data)
  }

  updateHomeText() {
    this.router.navigate(['/update-home'])
    this.getHomeData()
  }
}
