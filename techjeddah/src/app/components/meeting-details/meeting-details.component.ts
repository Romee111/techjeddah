import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent {
  meetingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<MeetingDetailsComponent>
  ) {
    this.meetingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      interest: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.meetingForm.valid) {
      this.http
        .post('http://localhost:2300/apply/applyCourse', this.meetingForm.value)
        .subscribe(() => {
          alert('Application submitted!');
          this.dialogRef.close();
        });
    }
  }
}
