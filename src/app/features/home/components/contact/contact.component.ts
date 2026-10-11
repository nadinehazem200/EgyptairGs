import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  isVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      }, { threshold: 0.2 });

      const el = document.getElementById('contact');
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }



  stations = [
  {
    name: 'Borg El-Arab',
    code: 'HBE',
    email: 'HBE.GS@egyptair.com',
    phones: ['01202221929', '01202221679'],

    left: '33.7410%',
    top: '9.3193%'
  },

  {
    name: 'Cairo',
    code: 'CAI',
    email: 'operationdpt.gs@egyptair.com',
    phones: ['01282329999'],

    left: '44.6043%',
    top: '16.2075%'
  },

  {
    name: 'Asyut',
    code: 'ATZ',
    email: 'Atz.GS@egyptair.com',
    phones: ['01202221696'],

    left: '42.0144%',
    top: '40.1135%'
  },

  {
    name: 'Sohag',
    code: 'HMB',
    email: 'HMB.GS@egyptair.com',
    phones: ['01202221516'],

    left: '46.9065%',
    top: '44.6515%'
  },

  {
    name: 'Luxor',
    code: 'LXR',
    email: 'LXR.GS@egyptair.com',
    phones: ['01202221890', '01006082807'],

    left: '52.3741%',
    top: '51.2966%'
  },

  {
    name: 'Aswan',
    code: 'ASW',
    email: 'ASW.GS@egyptair.com',
    phones: ['01202221461'],

    left: '53.6691%',
    top: '64.5057%'
  },

  {
    name: 'Hurghada',
    code: 'HRG',
    email: 'HRG.GS@egyptair.com',
    phones: ['01202221905'],

    left: '59.5683%',
    top: '38.9789%'
  },

  {
    name: 'Sharm-El-Sheikh',
    code: 'SSH',
    email: 'SSH.GS@egyptair.com',
    phones: ['01202221681'],

    left: '63.1655%',
    top: '33.3874%'
  },

  {
    name: 'Taba',
    code: 'TCP',
    email: 'Tcp.GS@egyptair.com',
    phones: ['01224154781'],

    left: '65.6115%',
    top: '20.0972%'
  }
];
}