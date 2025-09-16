import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeetingDetailsComponent } from './components/meeting-details/meeting-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ApplyNowComponent } from './components/apply-now/apply-now.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { TeamComponent } from './components/team/team.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: '',  component:HomeComponent },
  { path: 'meetings',  component:MeetingDetailsComponent },
  { path: 'courses',  component:CoursesComponent },
  { path: 'apply',  component:ApplyNowComponent },
  { path: 'contact',  component:ContactComponent },
  {path: 'coursedetail/:id', component: CoursedetailComponent },
  {path:'about-us', component: AboutusComponent},
  {path:'view-course/:id', component: ViewCourseComponent},
  {path:'team', component: TeamComponent},
  {path:'faq', component: FaqComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
