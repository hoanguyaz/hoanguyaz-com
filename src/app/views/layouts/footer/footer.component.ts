import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  host: {'class': 'footer'}
})
export class FooterComponent {
  year = new Date().getFullYear()
}
