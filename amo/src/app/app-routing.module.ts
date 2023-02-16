import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperiencesComponent } from './components/experiences/edit-experiences.component';
import { NewExperiencesComponent } from './components/experiences/new-experiences.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditAboutComponent } from './components/about/edit-about.component';



const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexp', component: NewExperiencesComponent },
  { path: 'editexp/:id', component: EditExperiencesComponent },
  { path: 'neweducat', component: NewEducationComponent },
  { path: 'editeducat/:id', component: EditEducationComponent },
  { path: 'sh&ss', component: SkillsComponent },
  { path: 'newproj', component: NewProjectsComponent },
  { path: 'editproj/:id', component: EditProjectsComponent },
  { path: 'editpers/:id', component: EditAboutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
