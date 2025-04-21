import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  sendEmail() {
    const serviceID = 'service_8enmtt7';
    const templateID = 'template_2b0mzja';
    const publicKey =' 50QINWXbfpEwHTXRT';

    const templateParams = {
      from_name: this.name,
      email: this.email,
      phone: this.phone,
      interest: this.interest,
      message: this.message
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: templateParams
    }, { headers }).subscribe({
      next: () => {
        alert('✅ Message sent successfully!');
        this.name = '';
        this.email = '';
        this.phone = '';
        this.interest = '';
        this.message = '';
      },
      error: (err) => {
        console.error('Email send error:', err);
        alert('❌ Failed to send message.');
      }
    });
  }
}

