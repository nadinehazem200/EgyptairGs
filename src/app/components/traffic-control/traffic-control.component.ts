import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-traffic-control',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './traffic-control.component.html',
  styleUrl: './traffic-control.component.css'
})
export class TrafficControlComponent {}