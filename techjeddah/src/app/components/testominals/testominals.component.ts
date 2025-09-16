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
      authorName: 'Hafsah Khan',
      role: 'Business &  Digital development Specialist',
      text: 'I believe in continuous learning and development to stay ahead of the curve.',
      image: '../assets/hafsah.jpg'
    },
    {
      authorName: 'Sohaib Ahmed',
      role: 'Software Engineer',
      text: 'I aim to make a positive impact in the world through my work at TechJeddah .',
      image: '../assets/sohaib.jpg'
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