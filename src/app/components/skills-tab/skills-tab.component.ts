import { Component, Input, OnInit } from '@angular/core';
import { SkillTab, SKILLTABS } from 'src/app/skills';

@Component({
  selector: 'app-skills-tab',
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.css']
})
export class SkillsTabComponent implements OnInit {
  @Input() skillTab: SkillTab = SKILLTABS[0]

  constructor() { }

  ngOnInit(): void {
  }

  toggleTab(skillTab: SkillTab) {
    skillTab.open = !skillTab.open
  }
}
