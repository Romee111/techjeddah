import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  team = [
    {
      name: 'Sohaib Romee',
      position: 'CEO & Founder',
      bio: 'Educational technology expert with a passion for connecting educators globally.',
      image: '/assets/images/team/jane-doe.jpg'
    },
    {
      name: ' Hafsah Khan ',
      position: 'CTO',
      bio: 'CEO at justHafah  and   Social Media & Business Tools Strategist having expirence of 12 years .',  
      image: '/assets/hafsah.jpg',
    },
    {
      name: 'Sohaib Ahmed',
      position: 'frontend Engineer',
      bio: 'Curriculum development specialist focused on creating engaging learning experiences and improving student outcomes.',
      image: '/assets/images/team/sarah-johnson.jpg'
    }
  ];

  milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Edu Meeting was established with a vision to transform educational conferences.'
    },
    {
      year: '2018',
      title: 'Platform Launch',
      description: 'Launched our digital platform connecting educators worldwide.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to 25 countries and reached 50,000 active users.'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received the Educational Innovation Award for our virtual conference technology.'
    }
  ];


}
