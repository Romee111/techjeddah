import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/shared/testoimonial.interface';

@Component({
  selector: 'app-testominals',
  templateUrl: './testominals.component.html',
  styleUrls: ['./testominals.component.css']
})
export class TestominalsComponent implements OnInit {

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

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.currentIndex = index;
  }

}