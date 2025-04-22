import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent {
  constructor(
    private router: Router
  ) {}
  contactForm() {
    this.router.navigate(['contact']);
  }

 
  

}
