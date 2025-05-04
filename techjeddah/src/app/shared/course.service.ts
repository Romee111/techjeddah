import { Injectable,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from './course/course.interface';
@Injectable({
  providedIn: 'root'
})
export class CourseService implements  OnInit {
   

    private apiUrl = 'http://localhost:8000/courses';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCourses`);
  }

  getCourseById(_id: string): Observable<Course> {
    return this.http.get<{
      data: any; course: Course 
}>(`${this.apiUrl}/getCourseById/${_id}`).pipe(
      map(response => response.data)
      
    );
}
}

