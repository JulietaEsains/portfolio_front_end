import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  qualificationData: any
  currentTab: string = 'education'

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getQualificationData().subscribe(data => this.qualificationData = data)
  }

  changeCurrentTab(tab: string) {
    this.currentTab = tab
  }

}
