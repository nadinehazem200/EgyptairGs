import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../../servives/feedback.service';
import { CustomerFeedback } from '../../../feedback.model';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  
  feedbackForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;
  feedbackTypes: string[] = ['Bug Report', 'Feature Request', 'General Feedback', 'Complaint'];

  constructor(private feedbackService: FeedbackService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      companyName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      feedbackType: ['Bug Report', Validators.required],
      message: ['', Validators.required]
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onFormSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    console.log('✅ Form Submit Clicked');
    console.log('Form Valid:', this.feedbackForm.valid);
    console.log('Form Value:', this.feedbackForm.value);

    if (!this.feedbackForm) {
      console.error('❌ Form is not initialized');
      this.errorMessage = 'Form is not properly initialized. Please refresh the page.';
      return;
    }

    if (this.feedbackForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      console.error('❌ Form Validation Failed');
      Object.keys(this.feedbackForm.controls).forEach(key => {
        const control = this.feedbackForm.get(key);
        console.log(`Field: ${key}, Valid: ${control?.valid}, Errors:`, control?.errors);
      });
      return;
    }

    this.isSubmitting = true;
    const feedback: CustomerFeedback = this.feedbackForm.value;
    console.log('✅ Submitting Feedback:', feedback);

    this.feedbackService.submitFeedback(feedback).subscribe({
      next: (response: any) => {
        console.log('✅ API Success Response:', response);
        this.successMessage = response?.message || 'Feedback submitted successfully!';
        this.isSubmitting = false;
        this.resetForm();
      },
      error: (err: any) => {
        console.error('❌ API Error:', err);
        console.error('Error Status:', err?.status);
        console.error('Error Message:', err?.message);
        
        if (err?.status === 0) {
          this.errorMessage = 'Cannot reach the server. Make sure the API is running on http://localhost:5245';
        } else if (err?.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Failed to submit feedback. Please check your connection or input details.';
        }
        this.isSubmitting = false;
      },
      complete: () => {
        console.log('✅ Feedback stream complete');
      }
    });
  }

  resetForm() {
    this.feedbackForm.reset({ feedbackType: 'Bug Report' });
  }
}