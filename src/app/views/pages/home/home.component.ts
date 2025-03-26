import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxItemDirective } from '@shared/directives/parallax-item.directive';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialsSliderComponent } from '@partials/testimonials-slider/testimonials-slider.component';
import { SectionCoursesComponent } from '@partials/section-courses/section-courses.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    ParallaxItemDirective,
    NgbAccordionModule,
    TestimonialsSliderComponent,
    SectionCoursesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  faqItems: any[] = [
    {
      id: 'fees',
      question: 'Học phí các khóa học tiếng Trung online là bao nhiêu?',
      answer: `
        <p>Học phí tại Hoa Ngữ YAZ được thiết kế phù hợp với từng loại khóa học và trình độ:</p>
        <ul>
          <li><strong>Khóa học cơ bản:</strong> Từ 1.500.000 VNĐ đến 2.500.000 VNĐ (15 buổi)</li>
          <li><strong>Khóa học luyện thi HSK:</strong> Từ 2.800.000 VNĐ đến 4.500.000 VNĐ tùy cấp độ (15-20 buổi)</li>
          <li><strong>Khóa học tiếng Trung thương mại:</strong> 4.500.000 VNĐ (15 buổi)</li>
          <li><strong>Khóa học tiếng Trung thiếu nhi:</strong> 2.200.000 VNĐ (12 buổi)</li>
        </ul>
        <p>Trung tâm thường xuyên có chương trình ưu đãi học phí khi đăng ký theo nhóm hoặc đăng ký sớm. Vui lòng liên hệ với tư vấn viên để biết thêm chi tiết.</p>
      `
    },
    {
      id: 'trial',
      question: 'Tôi có thể học thử trước khi đăng ký khóa học không?',
      answer: `
        <p>Có, Hoa Ngữ YAZ cung cấp buổi học thử <strong>miễn phí</strong> cho tất cả học viên tiềm năng.</p>
        <p>Buổi học thử diễn ra trong 45 phút, giúp bạn:</p>
        <ul>
          <li>Trải nghiệm phương pháp giảng dạy trực tuyến của chúng tôi</li>
          <li>Làm quen với giáo viên và phương pháp giảng dạy</li>
          <li>Đánh giá trình độ hiện tại và nhận tư vấn lộ trình học phù hợp</li>
        </ul>
        <p>Để đăng ký học thử, bạn có thể gọi điện theo số hotline hoặc điền form đăng ký trên website của trung tâm.</p>
      `
    },
    {
      id: 'schedule',
      question: 'Lịch học tại Hoa Ngữ YAZ được sắp xếp như thế nào?',
      answer: `
        <p>Lịch học tại Hoa Ngữ YAZ được thiết kế linh hoạt để phù hợp với thời gian của học viên:</p>
        <ul>
          <li><strong>Lớp cố định:</strong> Học theo lịch cố định 2-3 buổi/tuần, có thể chọn ca sáng (8h-11h), chiều (14h-17h) hoặc tối (18h-21h)</li>
          <li><strong>Lớp linh hoạt:</strong> Học viên có thể đặt lịch học trước 24h với giáo viên, phù hợp cho người đi làm hoặc có lịch trình thay đổi thường xuyên</li>
        </ul>
        <p>Mỗi buổi học kéo dài 90 phút và được tổ chức qua nền tảng Zoom với đầy đủ tính năng tương tác, chia sẻ màn hình và bảng trắng để đảm bảo chất lượng học tập.</p>
        <p>Trong trường hợp vắng học, học viên có thể báo trước ít nhất 4 tiếng để được sắp xếp học bù vào thời gian khác.</p>
      `
    },
    {
      id: 'method',
      question: 'Phương pháp giảng dạy tiếng Trung online của YAZ có hiệu quả không?',
      answer: `
        <p>Phương pháp giảng dạy của Hoa Ngữ YAZ được thiết kế đặc biệt cho môi trường học trực tuyến, đảm bảo hiệu quả không thua kém học trực tiếp:</p>
        <ul>
          <li><strong>Phương pháp giao tiếp:</strong> 70% thời gian học tập trung vào luyện nói và nghe, giúp học viên tự tin sử dụng tiếng Trung trong giao tiếp thực tế</li>
          <li><strong>Học theo chủ đề:</strong> Nội dung học được phân chia theo chủ đề thiết thực, gắn liền với các tình huống thường gặp</li>
          <li><strong>Công nghệ hỗ trợ:</strong> Sử dụng các phần mềm, ứng dụng và công cụ học tập trực tuyến hiện đại</li>
          <li><strong>Tương tác cao:</strong> Lớp học giới hạn tối đa 6 học viên, đảm bảo mỗi học viên được tương tác nhiều với giáo viên</li>
        </ul>
        <p>Kết quả cho thấy 95% học viên của chúng tôi đạt kết quả thi HSK đúng như mục tiêu đề ra và 97% học viên hài lòng với phương pháp giảng dạy trực tuyến.</p>
      `
    },
    {
      id: 'certificate',
      question: 'Học xong tôi có được cấp chứng chỉ không? Chứng chỉ có giá trị thế nào?',
      answer: `
        <p>Sau khi hoàn thành khóa học tại Hoa Ngữ YAZ, học viên sẽ nhận được:</p>
        <ol>
          <li><strong>Chứng nhận hoàn thành khóa học</strong> do Trung tâm Hoa Ngữ YAZ cấp, xác nhận trình độ và nội dung đã học</li>
          <li><strong>Hỗ trợ đăng ký thi chứng chỉ HSK chính thức</strong> (nếu học khóa luyện thi HSK)</li>
        </ol>
        <p>Về giá trị chứng chỉ:</p>
        <ul>
          <li>Chứng nhận của trung tâm có giá trị tham khảo khi xin việc hoặc du học</li>
          <li>Chứng chỉ HSK chính thức (do Hanban cấp sau khi thi đỗ) có giá trị toàn cầu, được công nhận tại hơn 120 quốc gia</li>
          <li>HSK cấp 4 trở lên đủ điều kiện xin học bổng du học Trung Quốc</li>
          <li>HSK cấp 5-6 là lợi thế lớn khi xin việc tại các công ty, tập đoàn Trung Quốc hoặc có quan hệ với đối tác Trung Quốc</li>
        </ul>
        <p>Trung tâm Hoa Ngữ YAZ cam kết đồng hành cùng học viên trong suốt quá trình học tập và chuẩn bị cho kỳ thi chứng chỉ quan trọng.</p>
      `
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
