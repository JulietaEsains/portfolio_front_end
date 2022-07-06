import { Component, OnInit } from '@angular/core';
import { QualificationTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  qualificationTabs: QualificationTab[] = []
  currentTab: string = 'education'

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('qualificationTabs').subscribe(data => this.qualificationTabs = data)
  }

  changeCurrentTab(tab: string) {
    this.currentTab = tab
  }

}
