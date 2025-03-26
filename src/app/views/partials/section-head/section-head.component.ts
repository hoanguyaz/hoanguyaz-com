import { Component, Input } from '@angular/core';
import { ParallaxItemDirective } from '@shared/directives/parallax-item.directive';

@Component({
  selector: 'app-section-head',
  imports: [
    ParallaxItemDirective
  ],
  templateUrl: './section-head.component.html',
  styleUrl: './section-head.component.scss',
  host: {'class': 'section-head'}
})
export class SectionHeadComponent {
  @Input() title!: string;
}
