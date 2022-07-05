import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section, SECTIONS } from 'src/app/sections';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent implements OnInit {
  @Input() section: Section = SECTIONS[0] 

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
