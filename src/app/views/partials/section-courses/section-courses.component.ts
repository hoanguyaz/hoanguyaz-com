import { afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-section-courses',
  imports: [
    RouterLink
  ],
  templateUrl: './section-courses.component.html',
  styleUrl: './section-courses.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    ngSkipHydration: 'true',
    class: 'courses-wrapper'
  },
})
export class SectionCoursesComponent {
  isBrowser = false;
  courses!: any;

  private http = inject(HttpClient)

  constructor() {
    // Đăng ký Swiper Elements
    register();

    // Sử dụng afterNextRender để chỉ thực hiện ở browser
    afterNextRender(async () => {
      this.courses = await lastValueFrom(this.http.get('/data/courses.json'));
      console.log(this.courses);
      this.isBrowser = true;
    });
  }
}
