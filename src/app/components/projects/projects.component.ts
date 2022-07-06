import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  projectsData: any

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getProjectsData().subscribe(data => this.projectsData = data)
  }

}
