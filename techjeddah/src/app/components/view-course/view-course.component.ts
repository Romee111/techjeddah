import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/course.service';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
  lessons: any[] = [];

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(course => {
         this.lessons = course.course.lessons;
         console.log(this.lessons);
        });
    }
  }

}
