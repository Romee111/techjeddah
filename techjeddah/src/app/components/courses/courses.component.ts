import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from 'src/app/shared/course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data.course;
      console.log(this.courses );
      
    });
  }

  goToCourseDetail(courseId: string): void {
    console.log('Navigating to course with ID:', courseId);
    this.router.navigate(['/coursedetail', courseId]);
  }
  
}