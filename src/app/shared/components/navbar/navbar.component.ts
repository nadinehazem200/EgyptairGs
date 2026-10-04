import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isSectionVisible = false;
  menuOpen = false;

  constructor(private route: ActivatedRoute, private elementRef: ElementRef) {}

  ngOnInit() {
    this.route.fragment.subscribe((frag) => {
      if (frag === 'services') {
        this.isSectionVisible = true;
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection() {
    this.closeMenu(); // close menu when link is clicked
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  scrollToServices() {
    this.closeMenu(); // close menu when link is clicked
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  scrollToContact() {
    this.closeMenu(); // close menu when link is clicked
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  // Close menu when clicking outside the navbar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.menuOpen) {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.closeMenu();
      }
    }
  }

  scrollToCustomers() {
  const element = document.getElementById('customers');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  this.menuOpen = false; // عشان يقفل المنيو لو فاتح من الموبايل بعد الدوسة
}
scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  this.menuOpen = false;
}

  // Scroll effect to add 'scrolled' class to navbar
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