import { Injectable,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from './course/course.interface';
@Injectable({
  providedIn: 'root'
})
export class CourseService implements  OnInit {
   

    private apiUrl = 'http://localhost:2300/course';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getavailableCourse`);
  }

  getCourseById(_id: string): Observable<Course> {
    return this.http.get<{ course: Course }>(`${this.apiUrl}/getCourse/${_id}`).pipe(
      map(response => response.course)
    );
}
}

