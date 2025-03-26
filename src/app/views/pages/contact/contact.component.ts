import { Component, inject, OnInit } from '@angular/core';
import { SectionHeadComponent } from '@partials/section-head/section-head.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [
    SectionHeadComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private titleService = inject(Title);
  private meta = inject(Meta);
  title = 'Liên hệ';

  ngOnInit(): void {
    // Set SEO metadata
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content: 'Tìm hiểu về Hoa Ngữ YAZ - Trung tâm dạy tiếng Trung online uy tín với phương pháp giảng dạy hiện đại và đội ngũ giáo viên chất lượng.'
    });
  }
}
