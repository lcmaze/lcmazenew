import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @Input('smallcap') smallcap : any;
  @Input('bigcap') bigcap : any;

  detail = [
    { name : "Ronald Dias", text : " When our own skills did not manage to get where we wanted, Lcmaze Solutions took care of the rest. The expertize, customer service and follow ups we experienced from Lcmaze Solutions were simply flawless.", image : 'assets/images/02.jpg', designation : 'Director - Studio 90'},            
    { name : "Charles Thomas", text : " We thank Lcmaze Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future. ", image : 'assets/images/01.jpg', designation : 'NRI from America'},            
  ]
  options={dots: false, nav: false, loop: true,margin:20, autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true, animateOut: 'fadeOut',
  animateIn: 'fadeIn', slideSpeed: 4000, responsive: {
    0: {
      items: 1
    },
    1200: {
      items: 1
    }
  }};

  constructor() { }

  ngOnInit() {
  }

}
