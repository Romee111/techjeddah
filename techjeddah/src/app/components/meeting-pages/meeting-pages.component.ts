import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/tasks/project.service';
@Component({
  selector: 'app-meeting-pages',
  templateUrl: './meeting-pages.component.html',
  styleUrls: ['./meeting-pages.component.css']
})
export class MeetingPagesComponent implements OnInit {
  projects: any[] = [];
  constructor (private projectService: ProjectService) {}

  ngOnInit(): void {
  this.projectService.getProjects().subscribe((data) => {
    console.log(data);
    this.projects= data.service;
    console.log(this.projects);
    
  })
    
  }

}

