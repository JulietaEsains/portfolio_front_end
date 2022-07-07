import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from 'src/app/interfaces';
import { HomeService } from 'src/app/services/home.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home-update',
  templateUrl: './home-update.component.html',
  styleUrls: ['./home-update.component.css']
})
export class HomeUpdateComponent implements OnInit {
  home: Home = {
    bannerSrc: '', title: '', subtitle: '', description: ''
  }

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private portfolioService: PortfolioService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getHomeData()
  }

  getHomeData() {
    this.portfolioService.getData('home').subscribe(data => {
      this.home = data
    })
  }

  updateHomeText() {
    this.homeService.updateHomeText(this.home).subscribe(data => this.getHomeData())
    this.router.navigate(['/'])
  }

}
