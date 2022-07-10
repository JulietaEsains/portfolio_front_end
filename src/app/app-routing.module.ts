import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeUpdateComponent } from './components/update/home-update/home-update.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMeUpdateComponent } from './components/update/about-me-update/about-me-update.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsUpdateComponent } from './components/update/skills-update/skills-update.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { QualificationUpdateComponent } from './components/update/qualification-update/qualification-update.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsUpdateComponent } from './components/update/projects-update/projects-update.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'update-home', component: HomeUpdateComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'update-about-me', component: AboutMeUpdateComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'update-skill-tab/:id', component: SkillsUpdateComponent},
  {path: 'qualification', component: QualificationComponent},
  {path: 'update-qualification-tab/:id', component: QualificationUpdateComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'update-project/:id', component: ProjectsUpdateComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
