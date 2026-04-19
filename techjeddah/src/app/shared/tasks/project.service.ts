import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private taskApi = `${environment.apiUrl}/service`;

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any>(`${this.taskApi}/getService`);
  }

  addProjects(project: any) {
    return this.http.post(`${this.taskApi}/addService`, project);
  }
}
