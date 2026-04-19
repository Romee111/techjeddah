import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyService } from 'src/app/shared/apply/apply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent {
  applyForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private applyService: ApplyService,
    private router: Router
  ) {
    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+\s\(\)]{8,}$/)]],
      interest: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.applyForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    const formData = { ...this.applyForm.value };
    formData.status = 'pending';

    this.applyService.applyCourse(formData).subscribe({
      next: () => {
        this.successMessage = 'Application submitted successfully! We will review it shortly.';
        this.applyForm.reset();
        this.isSubmitting = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Unable to submit application. Please try again later.';
        this.isSubmitting = false;
        console.error('Application submission error:', err);
      }
    });
  }

  contactForm() {
    this.router.navigate(['contact']);
  }
}
