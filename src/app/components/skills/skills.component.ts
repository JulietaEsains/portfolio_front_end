import { Component, OnInit } from '@angular/core';
import { SkillTab, SKILLTABS } from 'src/app/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillTabs: SkillTab[] = SKILLTABS

  constructor() { }

  ngOnInit(): void {
  }

}
