import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadComponent } from '@partials/section-head/section-head.component';
import { Meta, Title } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  imports: [
    RouterLink,
    SectionHeadComponent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  private http = inject(HttpClient);

  private titleService = inject(Title);
  private meta = inject(Meta);
  title = 'Các khóa học';

  courses!: any;

  ngOnInit(): void {
    // Set SEO metadata
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content: 'Tìm hiểu về Hoa Ngữ YAZ - Trung tâm dạy tiếng Trung online uy tín với phương pháp giảng dạy hiện đại và đội ngũ giáo viên chất lượng.'
    });

    this.getData();
  }

  async getData() {
    this.courses = await lastValueFrom(this.http.get('/data/courses.json'));
  }
}
