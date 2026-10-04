import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    CustomersComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}