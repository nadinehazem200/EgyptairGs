import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-baggage-handling',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './baggage-handling.component.html',
  styleUrls: ['./baggage-handling.component.css']
})
export class BaggageHandlingComponent {
  servicesList: string[] = [
    'Baggage Assembly, Sorting, Reconciliation and Transportation.',
    'Loading and Unloading.',
    'Operation/Handling of Baggage Reconciliation System.'
  ];
}