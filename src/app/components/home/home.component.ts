import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/interfaces';
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
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('home').subscribe(data => this.home = data)
  }

}
