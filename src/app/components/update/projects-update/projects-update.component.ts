import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-update',
  templateUrl: './projects-update.component.html',
  styleUrls: ['./projects-update.component.css']
})
export class ProjectsUpdateComponent implements OnInit {
  projectId: number = 0
  projects: Project[] = []
  project: Project = {
    id: 0, title: '', beginning: '', end: '', description: '', link: '', pictureUrl: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.projectId = params['id'])
    this.projectsService.getProjectToUpdate(this.projectId).subscribe(data => this.project = data)
  }

  getProjectsData() {
    this.portfolioService.getData('projects').subscribe(data => this.projects = data)
  }

  updateProject() {
    this.projectsService.updateProject(this.project).subscribe(data => this.getProjectsData())
    this.router.navigate(['projects'])
  }

}
