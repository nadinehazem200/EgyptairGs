import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aero-metal-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aero-metal-services.component.html',
  styleUrls: ['./aero-metal-services.component.css']
})
export class AeroMetalServicesComponent {}