import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fleet-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './fleet-solutions.component.html',
  styleUrl: './fleet-solutions.component.css'
})
export class FleetSolutionsComponent {

  services: string[] = [
    'Cabin Grooming and Deep Cleaning',
    'Turnaround Cleaning',
    'Toilet and Water Services',
    'Disinfection Services'
  ];

}