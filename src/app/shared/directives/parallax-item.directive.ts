import { Directive, ElementRef, HostListener, inject, Input, OnInit } from '@angular/core';

/**
 * <img appParallaxItem [top]="0" [left]="0" [rotate]="20" [inversion]="false" [opacity]="1" [movement]="0.01" ngSrc="/assets/images/hero-shape2.avif" alt="" fill>
 * <img appParallaxItem [top]="0" [left]="0" [rotate]="0" [inversion]="true" [opacity]="1" [movement]="0.02" ngSrc="/assets/images/hero-shape.avif" alt="" fill>
 */

@Directive({
  selector: '[appParallaxItem]',
  standalone: true
})
export class ParallaxItemDirective implements OnInit {
  @Input() top: string | any;
  @Input() left: string | any;
  @Input() rotate: number | any = 30;
  @Input() opacity: number | any = 1;
  @Input() inversion: number | any = false;
  @Input() movement: number | any = 0.025;
  newX: any;
  newY: any;
  eleRef = inject(ElementRef)

  ngOnInit(): void {
    this.eleRef.nativeElement.style.position = 'absolute';
    this.eleRef.nativeElement.style.top = this.top;
    this.eleRef.nativeElement.style.left = this.left;
    this.eleRef.nativeElement.style.transform = `translate(0px, 0px) rotate(${this.rotate}deg)`;
    this.eleRef.nativeElement.style.opacity = this.opacity;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.movement = this.movement ? this.movement : 0.025;

    const cursorX = e.pageX;
    const cursorY = e.pageY;

    if (!this.inversion) {
      this.newX = cursorX * this.movement;
      this.newY = cursorY * this.movement;
    } else {
      this.newX = -(cursorX * this.movement);
      this.newY = -(cursorY * this.movement);
    }

    this.eleRef.nativeElement.style.transform = `translate(${this.newX}px, ${this.newY}px) rotate(${this.rotate}deg)`;
  }
}
