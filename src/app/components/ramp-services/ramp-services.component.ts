import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ramp-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ramp-services.component.html',
  styleUrls: ['./ramp-services.component.css']
})
export class RampServicesComponent {
  // قائمة الخدمات كما في الصورة
  servicesList: string[] = [
    'Aircraft Turnaround Coordination.',
    'Ground to Cock-Pit Headset Service.',
    'Marshaling the Aircraft on Ground at Arrival and Departure.',
    'Aircraft Loading Supervision (ie. Loading & Unloading of Cargo, Mail, and Passengers\' Baggage).',
    'Ground Power Unit (GPU).',
    'Push-Back.',
    'Unit Load Device Control (ULD).',
    'Air Conditioning Unit (ACU).',
    'Air Starter Unit (ASU).',
    'Aircraft Towing.',
    'Wing-Walkers.'
  ];
}