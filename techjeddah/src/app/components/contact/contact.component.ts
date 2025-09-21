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
  successMessage = ''; // for frontend success feedback
  errorMessage = '';   // for frontend error feedback

  constructor(private contactService: ContactService) {}

  sendEmail() {
    const contactData = {
      name: this.name,
      email: this.email,
      contactNo: this.phone,
      subject: this.interest,
      message: this.message
    };

    this.contactService.addContact(contactData).subscribe({
      next: (res: any) => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        // Reset form fields
        this.name = '';
        this.email = '';
        this.phone = '';
        this.interest = '';
        this.message = '';
      },
      error: (err) => {
        this.errorMessage = 'Failed to send message. Please try again later.';
        this.successMessage = '';
        console.error(err);
      }
    });
  }
}
