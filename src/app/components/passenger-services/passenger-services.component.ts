import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-passenger-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './passenger-services.component.html',
  styleUrls: ['./passenger-services.component.css']
})
export class PassengerServicesComponent {
  // Carousel Images
  carouselImages: string[] = [
    'assets/passengers.jpg',
    '/assets/Transportation.jpg'
  ];
  
  currentImageIndex: number = 0;
  private touchStartX: number = 0;
  
  // قائمة الخدمات كما في الصورة
  servicesList: string[] = [
    'Station management',
    'Gate service',
    'Assisting passengers with reduced mobility',
    'VIP services',
    'Deportee handling',
    'Additional security services',
    'Flight operations',
    'Arrival and transfer services',
    'Check-in services',
    'Passenger manifests and seat allocation',
    'Excess baggage services',
    'Boarding pass and baggage tagging',
    'Dedicated passenger services',
    'Load control',
    'Crew handling'
  ];

  // Next image in carousel
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
  }

  // Previous image in carousel
  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  // Touch swipe handling
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = this.touchStartX - touchEndX;
    
    if (diff > 50) {
      // Swipe left - next image
      this.nextImage();
    } else if (diff < -50) {
      // Swipe right - previous image
      this.previousImage();
    }
  }
}