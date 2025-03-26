import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxItemDirective } from '@shared/directives/parallax-item.directive';

@Component({
  selector: 'app-section-cta',
  imports: [
    RouterLink,
    ParallaxItemDirective
  ],
  templateUrl: './section-cta.component.html',
  styleUrl: './section-cta.component.scss',
  host: {'class': 'section-cta'}
})
export class SectionCtaComponent {

}
