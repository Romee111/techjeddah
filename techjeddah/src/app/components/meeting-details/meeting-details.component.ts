import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApplyService } from 'src/app/shared/apply/apply.service';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent {
  meetingForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private applyService: ApplyService,
    private dialogRef: MatDialogRef<MeetingDetailsComponent>
  ) {
    this.meetingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+\s\(\)]{8,}$/)]],
      interest: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.meetingForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.isSubmitting = true;
    const formData = { ...this.meetingForm.value };
    formData.status = 'pending';

    this.applyService.applyCourse(formData).subscribe({
      next: () => {
        this.successMessage = 'Application submitted successfully! We will review it shortly.';
        this.isSubmitting = false;
        setTimeout(() => this.dialogRef.close(true), 1500);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Unable to submit application. Please try again later.';
        this.isSubmitting = false;
        console.error('Application submission error:', err);
      }
    });
  }
}
