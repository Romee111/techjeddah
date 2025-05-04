import { Component } from '@angular/core';
import { ContactService } from '../../shared/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  phone = '';
  interest = '';
  message = '';

  constructor(private contactService: ContactService) {}

  sendEmail() {
    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message,
      yourFieldOfInterest: this.interest
    };

    this.contactService.addContact(contactData).subscribe({
      next: (res: any) => {
        alert('Message sent successfully');
        this.name = this.email = this.phone = this.interest = this.message = '';
      },
      error: (err) => {
        alert('Failed to send message.');
        console.error(err);
      }
    });
  }
}
