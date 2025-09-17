import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  openIndex: number | null = null;

 

  terms = [
    { title: 'Acceptance of Terms', content: 'By using this site you accept and agree to be bound by these Terms & Conditions.' },
    { title: 'Use of Service', content: 'You agree to use the service only for lawful purposes and in compliance with all applicable laws.' },
    { title: 'Payments & Refunds', content: 'Payment terms and refund policies are described here. Refunds are granted at our discretion.' },
    { title: 'Content Ownership', content: 'All content provided on the site is owned by the company unless explicitly stated otherwise.' },
    { title: 'Limitation of Liability', content: 'We are not liable for indirect, incidental, or consequential damages arising from use of the service.' }
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

}
