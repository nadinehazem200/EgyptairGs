import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  showAll = false;

  allCustomers = [
    { name: 'iFly Airlines',       logo: 'assets/our-customers/iFlyAirline.png' },
    { name: 'Emirates',            logo: 'assets/our-customers/Emirates.png' },
    { name: 'Turkish Airlines',    logo: 'assets/our-customers/TurkishAirlines.png' },
    { name: 'Etihad Airways',      logo: 'assets/our-customers/EtihadAirways.png' },
    { name: 'Ethiopian Airways',   logo: 'assets/our-customers/EthiopianAirways.png' },
    { name: 'Air Arabia',          logo: 'assets/our-customers/airArabia.png' },
    { name: 'Korean Air',          logo: 'assets/our-customers/KOREANAIR.png' },
    { name: 'Royal Air Maroc',     logo: 'assets/our-customers/RoyalAirMoroco.png' },
    { name: 'Austrian Airlines',   logo: 'assets/our-customers/AustrianAirlines.png' },
    { name: 'Neos',                logo: 'assets/our-customers/neos.png' },
    { name: 'SAUDIA',              logo: 'assets/our-customers/SAUDIA.png' },
    { name: 'LOT',                 logo: 'assets/our-customers/LOT.png' },
    { name: 'TAROM',               logo: 'assets/our-customers/TAROM.png' },
    { name: 'Rossiya Airlines',    logo: 'assets/our-customers/RossiyaAirlines.png' },
  ];

  get visibleCustomers() {
    return this.showAll ? this.allCustomers : this.allCustomers.slice(0, 3);
  }
}
