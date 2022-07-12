import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill, SkillTab } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillTabs: SkillTab[] = []

  constructor(
    private portfolioService: PortfolioService,
    private skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSkillsData()
  }

  getSkillsData() {
    this.portfolioService.getData('skillTabs').subscribe(data => this.skillTabs = data)
  }

  toggleTab(skillTab: SkillTab) {
    skillTab.open = !skillTab.open
  }

  updateSkillTab(skillTab: SkillTab, newSkills: Skill[]) {
    this.skillsService.updateSkillTab(skillTab, newSkills).subscribe(data => this.getSkillsData())
  }

  addSkill(skillTab: SkillTab) {
    this.router.navigate(['/add-skill'], {queryParams: skillTab})
  }

  updateSkill(skillTab: SkillTab, skill: Skill) {
    this.router.navigate(['/update-skill-tab', skillTab.id], {queryParams: skill})
  }

  deleteSkill(skillTab: SkillTab, skill: Skill) {
    const newSkills = skillTab.skills.filter(s => s.id !== skill.id)

    if (confirm(`¿Está seguro/a de que quiere borrar esta habilidad (${skill.name} - ${skill.percentage}%)?`)) {
      this.updateSkillTab(skillTab, newSkills)
    }
  }
}
