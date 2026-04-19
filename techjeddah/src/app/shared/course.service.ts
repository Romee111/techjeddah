import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from './course/course.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = `${environment.apiUrl}/course`;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCourses`);
  }

  getCourseById(_id: string): Observable<Course> {
    return this.http.get<{ course: Course }>(`${this.apiUrl}/getCourse/${_id}`).pipe(
      map(response => response.course)
    );
  }
}

