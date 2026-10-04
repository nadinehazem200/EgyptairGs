import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aero-metal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aero-metal.component.html',
  styleUrls: ['./aero-metal.component.css']
})
export class AeroMetalComponent {

  goals = [
    'Improving all manufacturing and maintenance operations by re-construction for all workshops and buildings, installing new machines and equipments frequently to achieve the required quality for the products according to international standards.',
    'Promoting engineers and technicians by providing them with all updates in the industrial field to be able to achieve the international required standards.',
    'Manufacturing all metal parts required for different manufacturing and maintenance process in our factory.',
    'Manufacturing new products to open new market for our sales.'
  ];

}