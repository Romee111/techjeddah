import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/course/course.interface';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  course!:Course;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Navigating to course with ID:', courseId);
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe({
        next: (course) => {
          console.log('Received course:', course);
          this.course = course;
        },
        error: (err) => {
          console.error('Error loading course:', err);
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/courses']);
  }
}
