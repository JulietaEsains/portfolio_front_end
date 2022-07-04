import { Component, Input, OnInit } from '@angular/core';
import { Section, SECTIONS } from 'src/app/sections';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent implements OnInit {
  @Input() section: Section = SECTIONS[0] 

  constructor() { }

  ngOnInit(): void {
  }

  goToSection(sectionToGo: Section) {
    // Pongo todas las secciones como inactivas excepto aquella a la que quiero acceder
    for (let section of SECTIONS) {
      if (section === sectionToGo) {
        section.active = true
      } else {
        section.active = false
      }
    }
  }

}
