import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../shared/course/course.interface';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent {
  course!: Course | undefined;
  isLoading = true;
  errorMsg: string | null = null;
instruct_type: any;
baseUrl:string = 'http://localhost:8000';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourseById(id).subscribe({
        next: (response) => {
          this.course = response;
          console.log(this.course);
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMsg = 'Course not found or failed to load.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMsg = 'No course ID provided in URL.';
      this.isLoading = false;
    }
  }

  backToList() {
    window.history.back();
  }

  downloadOutline() {
    if (this.course?.title) {
      const fileName = `${this.course.title}.pdf`;
      const filePath = `assets/outlines/${fileName}`; // You place PDFs inside /assets/outlines/

      const link = document.createElement('a');
      link.href = filePath;
      link.download = fileName;
      link.click();
    }
  }
  ViewCourse(courseId: string): void {
    this.router.navigate(['/view-course', courseId]);
  }
  getInstructorImage(instructor: string): string {
    const lowerName = instructor.toLowerCase().trim();  // remove spaces around
  
    if (lowerName.includes('sohaib romee')) {
      return 'assets/instructors/SohaibRomee.jpg';
    } else if (lowerName.includes('sarah')) {
      return 'assets/instructors/sarah.jpg';
    } else if (lowerName.includes('sohaib')) {
      return 'assets/instructors/sohaib.jpg';
    } else {
      return 'assets/instructors/default.jpg'; // fallback image
    }
  }
  
  
}