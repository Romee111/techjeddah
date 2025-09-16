import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What services does ItechJeddah offer?',
      answer: 'ItechJeddah offers a wide range of IT solutions including web development, mobile app development, UI/UX design, and digital marketing.'
    },
    {
      question: 'Where is ItechJeddah located?',
      answer: 'ItechJeddah is located in Jeddah, Saudi Arabia.'
    },
    {
      question: 'How can I request a quote?',
      answer: 'You can request a quote by filling out the contact form on our website or by sending an email to our sales team.'
    },
    {
      question: 'Do you offer custom software development?',
      answer: 'Yes, we specialize in creating custom software solutions tailored to meet the specific needs of our clients.'
    },
    {
      question: 'What is your project development process?',
      answer: 'Our process includes discovery, planning, design, development, testing, and deployment, with continuous communication throughout the project.'
    }
  ];

  openIndex: number | null = null;

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}


