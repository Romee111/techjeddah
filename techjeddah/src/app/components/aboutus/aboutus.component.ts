import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
   feauturedPrograms = [
     {
       title: 'Web Development',
       description: 'Learn the basics of web development and build responsive and interactive websites.',
       icon: 'fas fa-code'
     },
     {  
       title: 'Digital Marketing',
       description: 'Master the art of digital marketing and optimize your online presence for success.',
       icon: 'fas fa-bullhorn' ,
     }, 
   ]

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
