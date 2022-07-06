import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../../assets/css/swiper-bundle.min.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProjectsComponent implements OnInit {
  swiperConfig = {
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  }
  
  projects: Project[] = []

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getData('projects').subscribe(data => this.projects = data)
  }

}
