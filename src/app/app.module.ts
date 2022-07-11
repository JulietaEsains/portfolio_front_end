import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from "swiper/angular";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsUpdateComponent } from './components/update/skills-update/skills-update.component';
import { FormsModule } from '@angular/forms';
import { HomeUpdateComponent } from './components/update/home-update/home-update.component';
import { AboutMeUpdateComponent } from './components/update/about-me-update/about-me-update.component';
import { QualificationUpdateComponent } from './components/update/qualification-update/qualification-update.component';
import { ProjectsUpdateComponent } from './components/update/projects-update/projects-update.component';
import { AddProjectComponent } from './components/add/add-project/add-project.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    QualificationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    SkillsUpdateComponent,
    HomeUpdateComponent,
    AboutMeUpdateComponent,
    QualificationUpdateComponent,
    ProjectsUpdateComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
