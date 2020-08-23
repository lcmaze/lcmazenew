import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { VideobannerComponent } from './videobanner/videobanner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { PrimeboxComponent } from './primebox/primebox.component';
import { HeadingComponent } from './heading/heading.component';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, BannerComponent, VideobannerComponent, TestimonialsComponent, HeaderComponent, PrimeboxComponent, HeadingComponent, CategoriesComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule,
    OwlModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent, 
    VideobannerComponent,
    TestimonialsComponent,
    HeaderComponent,
    PrimeboxComponent,
    HeadingComponent,
    CategoriesComponent,
    ServicesComponent
  ]
})
export class ComponentsModule { }
