import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill, SkillTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-update',
  templateUrl: './skills-update.component.html',
  styleUrls: ['./skills-update.component.css']
})
export class SkillsUpdateComponent implements OnInit {
  tabId: number = 0
  skillId: number = 0
  skillTabs: SkillTab[] = []
  skill: Skill = {
    id: 0, name: '', percentage: 0
  }
  skillTab: SkillTab = {
    title: '', iconClass: '', skills: [], open: true
  }

  constructor(
    public route: ActivatedRoute, 
    public router: Router,
    public skillsService: SkillsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    let tabSub = this.route.params.subscribe(params => {
      this.tabId = params['id']
    })
    let skillSub = this.route.queryParams.subscribe(params => {
      this.skillId = Number(params['id'])
      this.skill.id = this.skillId
      this.skill.name = params['name']
      this.skill.percentage = params['percentage']
    })
    this.skillsService.getSkillTabToUpdate(this.tabId).subscribe(data => {
      this.skillTab = data
    })
  }

  getSkillsData() {
    this.portfolioService.getData('skillTabs').subscribe(data => this.skillTabs = data)
  }

  updateSkill() {
    this.skillTab.skills[this.skillId - 1] = this.skill
    this.skillsService.updateSkillTab(this.skillTab, this.skillTab.skills).subscribe(data => this.getSkillsData())
    this.router.navigate(['/skills'])
  }
}
