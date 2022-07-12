import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  editMode: boolean = false
  aboutMe: AboutMe = {
    pictureSrc: '',
    description: '',
    cv: ''
  }

  constructor(
    private uiService: UiService,
    private portfolioService: PortfolioService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAboutMeData()
    this.editMode = localStorage.getItem('edit-mode') == 'on' ? true : false
    this.uiService.isEditModeOn().subscribe(value => this.editMode = value)
  }

  getAboutMeData() {
    this.portfolioService.getData('about-me').subscribe(data => this.aboutMe = data)
  }

  updateAboutMeDescription() {
    this.router.navigate(['/update-about-me'])
    this.getAboutMeData()
  }

}
