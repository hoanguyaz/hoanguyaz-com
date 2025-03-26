import { afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { register } from 'swiper/element';

@Component({
  selector: 'app-home-testimonials-slider',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './testimonials-slider.component.html',
  styleUrl: './testimonials-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    ngSkipHydration: 'true',
    class: 'testimonial-wrapper'
  },
})
export class TestimonialsSliderComponent {
  isBrowser = false;
  testimonials: any[] = [
    {
      name: 'Nguyễn Thanh Tùng',
      content: 'Sau 6 tháng học tại Hoa Ngữ YAZ, tôi đã vượt qua kỳ thi HSK3 với số điểm cao. Giáo viên rất tận tâm và phương pháp giảng dạy giúp tôi tiến bộ nhanh chóng dù học online.',
      image: '/assets/images/testimonial.jpg',
    },
    {
      name: 'Trần Mỹ Phương',
      content: 'Tôi đã thử nhiều nơi học tiếng Trung nhưng chỉ có tại YAZ tôi mới cảm thấy thoải mái và tiến bộ. Lịch học linh hoạt giúp tôi dễ dàng sắp xếp thời gian dù công việc bận rộn.',
      image: '/assets/images/testimonial.jpg',
    },
    {
      name: 'Lê Văn Minh',
      content: 'Ban đầu tôi lo ngại việc học online sẽ khó tương tác, nhưng các thầy cô tại YAZ đã tạo không khí lớp học vô cùng sôi nổi. Kỹ năng phát âm của tôi tiến bộ rõ rệt sau khóa học.',
      image: '/assets/images/testimonial.jpg',
    },
    {
      name: 'Ngô Thị Hồng',
      content: 'Khóa học tiếng Trung thương mại tại YAZ đã giúp tôi tự tin giao tiếp với đối tác Trung Quốc. Giáo trình cập nhật và sát với thực tế công việc, giúp tôi áp dụng ngay vào công việc.',
      image: '/assets/images/testimonial.jpg',
    },
    {
      name: 'Phạm Quang Đức',
      content: 'Con trai tôi 8 tuổi đã học tiếng Trung thiếu nhi ở YAZ được 3 tháng. Tôi rất ngạc nhiên khi thấy cháu hứng thú và nhớ từ vựng nhanh. Phương pháp dạy trẻ em rất hiệu quả.',
      image: '/assets/images/testimonial.jpg',
    },
    {
      name: 'Lý Thị Thu Hà',
      content: 'Dù mới bắt đầu học tiếng Trung ở tuổi 40 nhưng tôi cảm thấy không hề khó khăn nhờ phương pháp giảng dạy khoa học tại YAZ. Giáo viên rất kiên nhẫn và có phương pháp dạy phù hợp với người lớn tuổi.',
      image: '/assets/images/testimonial.jpg',
    },
    {
      name: 'Trần Quốc Bảo',
      content: 'Tôi đăng ký khóa học luyện thi HSK5 tại YAZ và đã đạt kết quả ngoài mong đợi. Đặc biệt ấn tượng với phương pháp ôn luyện có hệ thống và bài tập thực hành phong phú.',
      image: '/assets/images/testimonial.jpg',
    }
  ];

  constructor() {
    // Đăng ký Swiper Elements
    register();

    // Sử dụng afterNextRender để chỉ thực hiện ở browser
    afterNextRender(() => {
      this.isBrowser = true;
    });
  }
}
