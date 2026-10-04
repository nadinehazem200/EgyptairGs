import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-load-control',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './load-control.component.html',
  styleUrl: './load-control.component.css'
})
export class LoadControlComponent {

  services = [
    'Load Planning.',
    'Aircraft Weight and Balance Calculations.',
    'Messaging and Telecommunications.',
    'Issuing Loading Instruction Reports, Notification to Captain and Load Sheet.'
  ];

}