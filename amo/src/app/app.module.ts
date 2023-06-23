import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditExperiencesComponent } from './components/experiences/edit-experiences.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './services/interceptor.service';
import { NewExperiencesComponent } from './components/experiences/new-experiences.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { IconsComponent } from './icons/icons.component';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { EditAboutComponent } from './components/about/edit-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    ExperiencesComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewExperiencesComponent,
    EditExperiencesComponent,
    ProjectsComponent,
    NewProjectsComponent,
    EditProjectsComponent,
    SkillsComponent,
    FooterComponent,
    PortfolioComponent,
    LoginComponent,
    ProgressComponent,
    IconsComponent,
    EditAboutComponent,
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [interceptorProvider, 
    CookieService, DatePipe, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
