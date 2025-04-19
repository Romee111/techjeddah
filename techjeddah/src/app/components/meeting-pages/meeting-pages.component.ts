import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-pages',
  templateUrl: './meeting-pages.component.html',
  styleUrls: ['./meeting-pages.component.css']
})
export class MeetingPagesComponent {
  meetings = [
    {
      id: 1,
      title: 'New Lecturers Meeting',
      price: 22.00,
      image: '../../../assets/livetraining.jpeg',
      month: 'Nov',
      day: 10,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.',
     
    },
    {
      id: 2,
      title: 'Online Teaching Techniques',
      price: 36.00,
      image: 'a../../../assets/livetraining.jpeg',
      month: 'Nov',
      day: 24,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'

    },
    {
      id: 3,
      title: 'Higher Education Conference',
      price: 14.00,
      image: '../../../assets/livetraining.jpeg',
      day: 26,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'
    },
    {
      id: 4,
      title: 'Student Training Meetup',
      price: 48.00,
      image: '../../../assets/livetraining.jpeg',
      month: 'Nov',
      day: 30,
      description: 'Morbi in libero blandit lectus cursus ullamcorper.'
    }
  ];

  categories = [
    'Sed tempus enim leo',
    'Aenean molestie quis',
    'Cras et metus vestibulum',
    'Nam et condimentum',
    'Phasellus nec sapien'

  ];
}

