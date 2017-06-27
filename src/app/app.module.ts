import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfExperienceComponent } from './prof-experience/prof-experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfSkillsComponent } from './prof-skills/prof-skills.component';
import { PersonalSkillsComponent } from './personal-skills/personal-skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    ProfSkillsComponent,
    PersonalSkillsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
