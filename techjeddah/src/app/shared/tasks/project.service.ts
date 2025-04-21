import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private taskApi = 'http://localhost:2300/service';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any>(`${this.taskApi}/getService`);
  }

  addProjects(project: any) {
    return this.http.post(`${this.taskApi}/addService`, project);
  }
}
