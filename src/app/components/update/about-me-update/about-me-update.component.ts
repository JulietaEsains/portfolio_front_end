import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/interfaces';
import { AboutMeService } from 'src/app/services/about-me.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me-update',
  templateUrl: './about-me-update.component.html',
  styleUrls: ['./about-me-update.component.css']
})
export class AboutMeUpdateComponent implements OnInit {
  aboutMe: AboutMe = {
    pictureSrc: '', description: '', cv: ''
  }

  constructor(
    private portfolioService: PortfolioService,
    private aboutMeService: AboutMeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAboutMeData()
  }

  getAboutMeData() {
    this.portfolioService.getData('about-me').subscribe(data => this.aboutMe = data)
  }

  updateAboutMeDescription() {
    this.aboutMeService.updateAboutMeDescription(this.aboutMe).subscribe(data => this.getAboutMeData())
    this.router.navigate(['/about-me'])
  }

}
