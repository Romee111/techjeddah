import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ApplyNowComponent } from './components/apply-now/apply-now.component';
import { MeetingDetailsComponent } from './components/meeting-details/meeting-details.component';
import { MeetingPagesComponent } from './components/meeting-pages/meeting-pages.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { OurSericesComponent } from './components/our-serices/our-serices.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MissionComponent } from './components/mission/mission.component';
import { TestominalsComponent } from './components/testominals/testominals.component';
import { TeamComponent } from './components/team/team.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewCourseComponent } from './components/view-course/view-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    ApplyNowComponent,
    MeetingDetailsComponent,
    MeetingPagesComponent,
    CoursesComponent,
    ContactComponent,
    FotterComponent,
    OurSericesComponent,
    CoursedetailComponent,
    BlogsComponent,
    AboutusComponent,
    MissionComponent,
    TestominalsComponent,
    TeamComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
