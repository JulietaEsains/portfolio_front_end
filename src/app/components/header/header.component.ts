import { Component, OnInit } from '@angular/core';
import { Section, SECTIONS } from 'src/app/sections';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  sections: Section[] = SECTIONS

  constructor() { }

  ngOnInit(): void {
  }

}
