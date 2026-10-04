import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ServicesComponent } from './features/home/components/services/services.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { PassengerServicesComponent } from './components/passenger-services/passenger-services.component';
import { BaggageHandlingComponent } from './components/baggage-handling/baggage-handling.component';
import { RampServicesComponent } from './components/ramp-services/ramp-services.component';
import { CargoServicesComponent } from './components/cargo-services/cargo-services.component';
import { FleetSolutionsComponent } from './components/fleet-solutions/fleet-solutions.component';
import { TrafficControlComponent } from './components/traffic-control/traffic-control.component';
import { LoadControlComponent } from './components/load-control/load-control.component';
import { AeroMetalComponent } from './components/aero-metal/aero-metal.component';
import { AeroMetalServicesComponent } from './components/aero-metal-services/aero-metal-services.component';
import { AeroMetalWorkshopsComponent } from './components/aero-metal-workshops/aero-metal-workshops.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feedback', component: FeedbackFormComponent },
  { path: 'passenger-services', component: PassengerServicesComponent },
  { path: 'baggage-handling', component: BaggageHandlingComponent },
  { path: 'ramp-services', component: RampServicesComponent },
  { path: 'cargo-services', component: CargoServicesComponent },
  { path: 'fleet-solutions', component: FleetSolutionsComponent },
  { path: 'traffic-control', component: TrafficControlComponent },
  { path: 'load-control', component: LoadControlComponent },
  { path: 'aero-metal', component: AeroMetalComponent },
  { path: 'aero-metal-services', component: AeroMetalServicesComponent },
  { path: 'aero-metal-workshops', component: AeroMetalWorkshopsComponent },
  { path: '**', redirectTo: '' }

  
];







