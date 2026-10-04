import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerFeedback } from '../../feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  // Your ASP.NET Core API endpoint URL
  private apiUrl = 'https://localhost:44359/api/feedback';

  constructor(private http: HttpClient) { }

  // Returns an Observable representing the HTTP POST stream
  submitFeedback(feedbackData: CustomerFeedback): Observable<any> {
    console.log('FeedbackService: Posting to', this.apiUrl);
    console.log('FeedbackService: Data:', feedbackData);
    return this.http.post<any>(this.apiUrl, feedbackData);
  }
}