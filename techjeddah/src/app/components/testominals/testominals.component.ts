import { Component,Input } from '@angular/core';
import { Testimonial } from 'src/app/shared/testoimonial.interface';

@Component({
  selector: 'app-testominals',
  templateUrl: './testominals.component.html',
  styleUrls: ['./testominals.component.css']
})


export class TestominalsComponent {

@Input() testimonials: Testimonial[] = [
    {
      authorName: 'Sohaib Romee',
      role: 'CEO and a ITProfessional',
      text: 'I dont chase perfection-I persue perfessionalism , because thats what builds real business.',
      image: '../assets/CEO.jpg'
    },
    {
      authorName: 'Sara Ahmed',
      role: 'UI Designer',
      text: 'The tutorials are clear, modern, and easy to understand!',
      image: 'https://via.placeholder.com/100/7c3aed/ffffff'
    },
    {
      authorName: 'Usman Tariq',
      role: 'Backend Engineer',
      text: 'I learned how to connect frontend with backend in a professional way.',
      image: 'https://via.placeholder.com/100/2563eb/ffffff'
    }
  ];





}
