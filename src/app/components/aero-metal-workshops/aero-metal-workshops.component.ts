import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aero-metal-workshops',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aero-metal-workshops.component.html',
  styleUrls: ['./aero-metal-workshops.component.css']
})
export class AeroMetalWorkshopsComponent {}