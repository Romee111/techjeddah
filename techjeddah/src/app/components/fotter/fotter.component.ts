import { Component } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})

export class FotterComponent {
  currentYear = new Date().getFullYear();
  // Footer data that could be moved to a service if needed


  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/tech-jeddah-9a6192361/' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/techjeddah/?hl=en' },
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61575250259723' },
    { icon: 'fab fa-whatsapp', url: 'https://web.whatsapp.com/' }
  ];
}
