import { Component, OnInit } from '@angular/core';
import { SkillTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillTabs: SkillTab[] = []

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('skillTabs').subscribe(data => this.skillTabs = data)
  }

  toggleTab(skillTab: any) {
    skillTab.open = !skillTab.open
  }

}
