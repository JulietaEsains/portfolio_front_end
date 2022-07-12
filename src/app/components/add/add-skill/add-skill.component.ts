import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill, SkillTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  tabId: number = 0
  skillTabs: SkillTab[] = []
  skillTab: SkillTab = {
    id: 0, title: '', iconClass: '', skills: [], open: false
  }
  skill: Skill = {
    id: 0, name: '', percentage: 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private skillsService: SkillsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    let tabSub = this.route.queryParams.subscribe(params => {
      this.tabId = params['id']
    })
    this.skillsService.getSkillTabToUpdate(this.tabId).subscribe(data => {
      this.skillTab = data
    })
  }

  getSkillsData() {
    this.portfolioService.getData('skillTabs').subscribe(data => this.skillTabs = data)
  }

  addSkill() {
    this.skill.id = this.skillTab.skills.length + 1
    this.skillTab.skills.push(this.skill)
    this.skillsService.updateSkillTab(this.skillTab, this.skillTab.skills).subscribe(data => this.getSkillsData())
    this.router.navigate(['/skills'])
  }

}
