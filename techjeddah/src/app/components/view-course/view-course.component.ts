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
    // const courseId = this.route.snapshot.paramMap.get('id');
    // if (courseId) {
    //   this.courseService.getCourseById(courseId).subscribe(course => {
    //     if(Array.isArray(course.lessons)){
    //       this.lessons = course.lessons;
    //           console.log('Array of lessons:', this.lessons);
    //     }
    //    else if (course.lessons ==='string') {
    //      this.lessons = JSON.parse(course.lessons);
    //      } 
     
    //     });
    // }
    const courseId = this.route.snapshot.paramMap.get('id');
  if (courseId) {
    this.courseService.getCourseById(courseId).subscribe(course => {
      if (Array.isArray(course.lessons)) {
        this.lessons = course.lessons;
        console.log('Array of lessons:', this.lessons);
      } else if (typeof course.lessons === 'string') {
        try {
          let parsed = JSON.parse(course.lessons);

          // check if fields are still stringified
          if (parsed.length && typeof parsed[0].title === 'string' && parsed[0].title.startsWith('"')) {
            parsed = parsed.map((lesson: any) => ({
              ...lesson,
              title: JSON.parse(lesson.title),
              content: JSON.parse(lesson.content),
              duration: JSON.parse(lesson.duration)
            }));
          }

          this.lessons = parsed;
          console.log('Parsed lessons:', this.lessons);
        } catch (err) {
          console.error('Error parsing lessons:', err);
        }
      }
    });
  }
  }

}
