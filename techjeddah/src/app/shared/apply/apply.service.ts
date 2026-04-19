import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  private apiUrl = `${environment.apiUrl}/apply`;

  constructor(private http: HttpClient) {}

  applyCourse(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/applyCourse`, data);
  }

  getApplications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getCourse`);
  }

  updateApplication(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateCourse/${id}`, data);
  }

  deleteApplication(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteCourse/${id}`);
  }
}
