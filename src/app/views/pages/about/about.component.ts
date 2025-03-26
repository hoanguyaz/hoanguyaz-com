import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SectionHeadComponent } from '@partials/section-head/section-head.component';
import { SectionCtaComponent } from '@partials/section-cta/section-cta.component';

@Component({
  selector: 'app-about',
  imports: [
    SectionHeadComponent,
    SectionCtaComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private titleService = inject(Title);
  private meta = inject(Meta);
  title = 'Về chúng tôi - Hoa Ngữ YAZ';

  ngOnInit(): void {
    // Set SEO metadata
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content: 'Tìm hiểu về Hoa Ngữ YAZ - Trung tâm dạy tiếng Trung online uy tín với phương pháp giảng dạy hiện đại và đội ngũ giáo viên chất lượng.'
    });
  }
}
