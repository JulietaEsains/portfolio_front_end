import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe: AboutMe = {
    pictureSrc: '',
    description: '',
    cv: ''
  }

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('about-me').subscribe(data => this.aboutMe = data)
  }

}
