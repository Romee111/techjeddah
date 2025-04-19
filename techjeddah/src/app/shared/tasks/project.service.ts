import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    const taskApi='http://localhost:2300/ourServices'
  constructor(
    private http: HttpClient,
  ) { }

  getProjects() {
    return this.http.get<any>(`$({this.taskApi/'getourServices}`);')
  }

  addProjects(project: any) {
    return this.http.post(`${this.taskApi}/addourServices`, project);
  }
}
