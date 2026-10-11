import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  // ==============================
  // MOBILE MENU
  // ==============================

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


  // ==============================
  // SERVICES
  // ==============================

  scrollToServices() {

    this.closeMenu();

    this.router.navigate(['/'], {
      fragment: 'services'
    }).then(() => {

      setTimeout(() => {

        const element = document.getElementById('services');

        if (element) {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        }

      }, 300);

    });

  }


  // ==============================
  // OUR CUSTOMERS
  // ==============================

  scrollToCustomers() {

    this.closeMenu();

    this.router.navigate(['/'], {
      fragment: 'customers'
    }).then(() => {

      setTimeout(() => {

        const element = document.getElementById('customers');

        if (element) {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        }

      }, 300);

    });

  }


  // ==============================
  // CONTACT US
  // ==============================

  scrollToContact() {

    this.closeMenu();

    this.router.navigate(['/'], {
      fragment: 'contact'
    }).then(() => {

      setTimeout(() => {

        const element = document.getElementById('contact');

        if (element) {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        }

      }, 300);

    });

  }


  // ==============================
  // CLOSE MENU WHEN CLICKING OUTSIDE
  // ==============================

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {

    if (this.menuOpen) {

      const clickedInside =
        this.elementRef.nativeElement.contains(event.target);

      if (!clickedInside) {

        this.closeMenu();

      }

    }

  }


  // ==============================
  // NAVBAR SCROLL EFFECT
  // ==============================

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {

      navbar?.classList.add('scrolled');

    } else {

      navbar?.classList.remove('scrolled');

    }

  }

}