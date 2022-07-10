import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProjectsService } from 'src/app/services/projects.service';

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
      loop: false,
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
    private portfolioService: PortfolioService,
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProjectsData()
  }

  getProjectsData() {
    this.portfolioService.getData('projects').subscribe(data => this.projects = data)
  }

  updateProject(project: Project) {
    this.router.navigate(['/update-project', project.id])
  }

  deleteProject(project: Project) {
    if (confirm(`¿Está seguro/a de que quiere borrar este proyecto (${project.title})?`)) {
      this.projectsService.deleteProject(project.id).subscribe(data => this.getProjectsData())
    }
  }

}
