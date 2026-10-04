import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  
  // 1. المتغيرات المطلوبة للـ HTML
  currentSlide: number = 0;
  progressPercent: number = 0;
  
  slides = [
    { image: 'assets/img-header/slider-img_1.jpg' },
    { image: 'assets/img-header/slider-img_2.jpg' },
    { image: 'assets/img-header/slider-img_3.jpg' },
    { image: 'assets/img-header/slider-img_4.jpg' },
    { image: 'assets/img-header/slider-img_5.jpg' }
  ];

  private intervalId: any;
  private readonly SLIDE_DURATION = 5000; // مدة كل صورة (5 ثواني)
  private readonly UPDATE_SPEED = 50;     // سرعة تحديث الـ Progress Bar

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlider();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.runPreload();
    }
  }

  // 2. دالة التنقل بين الصور (المطلوبة في الـ HTML)
  goToSlide(index: number): void {
    this.currentSlide = index;
    this.progressPercent = 0; // نصفر العداد لما المستخدم يغير الصورة يدوياً
  }

  // 3. تشغيل الـ Slider والـ Progress Bar مع بعض
  private startSlider(): void {
    const step = (this.UPDATE_SPEED / this.SLIDE_DURATION) * 100;

    this.intervalId = setInterval(() => {
      this.progressPercent += step;

      if (this.progressPercent >= 100) {
        this.nextSlide();
      }
    }, this.UPDATE_SPEED);
  }

  private nextSlide(): void {
    this.progressPercent = 0;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  private runPreload(): void {
    const BrowserImage = (window as any).Image;
    if (BrowserImage) {
      this.slides.forEach(slide => {
        const img = new BrowserImage();
        img.src = slide.image;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}