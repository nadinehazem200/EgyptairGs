import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit {
  
  // المصفوفة الخاصة بالصور (تأكد من تعديل المسارات حسب مشروعك)
  slides = [
    { image: 'assets/images/slide1.jpg' },
    { image: 'assets/images/slide2.jpg' },
    { image: 'assets/images/slide3.jpg' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // لا نضع كود الـ Image هنا أبداً لتجنب مشاكل الـ SSR
  }

  ngAfterViewInit(): void {
    // الكود يتم تنفيذه فقط بعد تحميل الـ View وفي المتصفح فقط
    if (isPlatformBrowser(this.platformId)) {
      this.preloadAllSlides();
    }
  }

  private preloadAllSlides(): void {
    // التأكد مرة أخرى أننا في المتصفح لضمان عدم تعريف "Image" في Node.js
    if (isPlatformBrowser(this.platformId)) {
      this.slides.forEach(slide => {
        this.preloadSlide(slide.image);
      });
    }
  }

  private preloadSlide(url: string): void {
    try {
      // استخدام الطريقة الأكثر أماناً للوصول لـ Image في المتصفح
      const img = new window.Image(); 
      img.src = url;
      img.onload = () => console.log(`Image preloaded: ${url}`);
      img.onerror = () => console.error(`Failed to preload: ${url}`);
    } catch (e) {
      // حماية إضافية في حال كان الـ Global Object غير متاح
      console.warn('Preload failed due to environment constraints');
    }
  }
}