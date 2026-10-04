import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // 1. استيراد الـ Route

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  services = [
    { title: 'Passenger Services', iconClass: 'fas fa-chart-line' },
    { title: 'Baggage Handling', iconClass: 'fas fa-database' },
    { title: 'Ramp Services', iconClass: 'fas fa-cloud' },
    { title: 'Cargo Services', iconClass: 'fas fa-headphones' },
    { title: 'Fleet Solutions', iconClass: 'fas fa-wrench' },
    { title: 'Traffic Control', iconClass: 'fas fa-server' },
    { title: 'Load Control', iconClass: 'fab fa-html5' },
 { title: 'About Aero Metal', iconClass: 'fas fa-industry' },
    { title: 'Aero Metal Services', iconClass: 'fas fa-cogs' },
    { title: 'Aero Metal Workshops', iconClass: 'fas fa-hard-hat' },
  ];

  @ViewChild('servicesSection') servicesSection!: ElementRef<HTMLElement>;
  isSectionVisible = false;
  private observer!: IntersectionObserver;

  // 2. حقن الـ ActivatedRoute والـ Platform ID
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // 3. مراقبة الـ URL (الـ Fragment)
    // لو المستخدم داس على اللينك في الـ Navbar، دي اللي هتشغل الـ Animation
    this.route.fragment.subscribe((frag) => {
      if (frag === 'services') {
        this.isSectionVisible = true;
      }
    });
  }

  ngAfterViewInit(): void {
    // 4. حماية من الـ SSR: الـ Observer يشتغل في المتصفح بس
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  private initObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // لو السكشن ظهر قدام العين بنسبة 40%، خليه Visible
        if (entry.isIntersecting) {
          this.isSectionVisible = true;
        }
      });
    }, { threshold: 0.4 });

    setTimeout(() => {
      if (this.servicesSection) {
        this.observer.observe(this.servicesSection.nativeElement);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Navigate to the appropriate page based on service title
  navigateToService(title: string): void {
    switch(title) {
      case 'Passenger Services':
        this.router.navigate(['/passenger-services']);
        break;
      case 'Baggage Handling':
        this.router.navigate(['/baggage-handling']);
        break;
      case 'Ramp Services':
        this.router.navigate(['/ramp-services']);
        break;
      case 'Cargo Services':
        this.router.navigate(['/cargo-services']);
        break;
      case 'Fleet Solutions':
        this.router.navigate(['/fleet-solutions']);
        break;
      case 'Traffic Control':
        this.router.navigate(['/traffic-control']);
        break;
      case 'Load Control':
        this.router.navigate(['/load-control']);
        break;
      case 'About Aero Metal':
        this.router.navigate(['/aero-metal']);
        break;
      case 'Aero Metal Services':
        this.router.navigate(['/aero-metal-services']);
        break;
      case 'Aero Metal Workshops':
        this.router.navigate(['/aero-metal-workshops']);
        break;
      case 'Feedback':
        this.router.navigate(['/feedback']);
        break;
      // Add more routes as needed
      default:
        break;
    }
  }
}