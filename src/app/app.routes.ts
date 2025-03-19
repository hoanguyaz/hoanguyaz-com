import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { PagesComponent } from '@pages/pages.component';
import { AboutComponent } from '@pages/about/about.component';
import { CoursesComponent } from '@pages/courses/courses.component';
import { ContactComponent } from '@pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' }, // Redirect về trang chủ nếu đường dẫn không tồn tại
    ]
  }
];
