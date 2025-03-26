import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private document = inject(DOCUMENT);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Chỉ chạy trong môi trường browser
      const windowHeight = () => {
        const doc = this.document.documentElement;
        doc.style.setProperty('--window-height', `${window.innerHeight}px`);
      };

      window.addEventListener('resize', windowHeight);
      windowHeight();
    }
  }
}
