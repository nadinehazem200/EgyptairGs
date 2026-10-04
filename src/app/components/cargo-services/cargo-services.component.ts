import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cargo-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cargo-services.component.html',
  styleUrls: ['./cargo-services.component.css']
})
export class CargoServicesComponent {
  additionalServices: string[] = [
    'General cargo handling',
    'Special cargo transportation',
    'Loading & unloading supervision',
    'Customs clearance support',
    'Warehousing and storage'
  ];
}