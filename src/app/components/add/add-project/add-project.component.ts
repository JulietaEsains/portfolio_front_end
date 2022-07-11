import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projects: Project[] = []
  project: Project = {
    id: 0, title: '', beginning: '', end: '', description: '', link: '', pictureUrl: ''
  }

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
  }

  getProjectsData() {
    this.portfolioService.getData('projects').subscribe(data => this.projects = data)
  }

  addProject() {
    if (!this.project.title || 
        !this.project.beginning ||
        !this.project.end ||
        !this.project.description ||
        !this.project.link) {
      alert('Por favor, llene todos los datos.')      
      return 
    }

    this.projectsService.addProject(this.project).subscribe(data => this.getProjectsData())
    this.router.navigate(['projects'])
  }

}
