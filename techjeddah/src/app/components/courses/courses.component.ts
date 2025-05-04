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
  showAllCourses = false;
  baseUrl = 'http://localhost:8000';

  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  get visibleCourses() {
    return this.showAllCourses ? this.courses : this.courses.slice(0, 4);
  }

  toggleCourses(): void {
    this.showAllCourses = !this.showAllCourses;
  }

  getCourseimage(title: string): string {
    const imageMap: { [key: string]: string } = {
      'Digital Marketing Bootcamp': 'assets/digitalmarketing.jpeg',
      'Full Stack Web Development': 'assets/webdevelopment.jpeg',
      'Canva Design for Beginners': 'assets/canva.jpeg',
      'YouTube Automation Mastery': 'assets/youtubeautomation.jpeg',
      'Social Media Marketing ': 'assets/socialmediamarketing.jpeg',
      'Advanced React': 'assets/advancedRedux.jpeg',
      'Programming Fundementals' :'assets/programmingfundemental.png'
    };

    const image = imageMap[title];
    return image || 'assets/web-dev.jpeg';
  }

  goToCourseDetail(courseId: string): void {
    console.log('Navigating to course with ID:', courseId);
    this.router.navigate(['/coursedetail', courseId]);
  }
  // getCourseEndDate(startDate: string, duration: number): string {
  //   const start = new Date(startDate);
  //   start.setDate(start.getDate() + duration * 7); // again, assuming weeks
  //   return start.toISOString().split('T')[0];
  // }
  getUpdatedStartDate(startDate: string, duration: number): string {
    const start = new Date(startDate);
    const now = new Date();
  
    const endDate = new Date(start);
    endDate.setDate(start.getDate() + duration * 7); // assuming duration is in weeks
  
    const updatedStart = endDate < now ? now : start;
  
    // Format date as DD-MM-YYYY
    const day = updatedStart.getDate().toString().padStart(2, '0');
    const month = (updatedStart.getMonth() + 1).toString().padStart(2, '0');
    const year = updatedStart.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
  
  
  
}
