import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('smallcap') smallcap : any;
  @Input('bigcap') bigcap : any;
  @Input('imgs') imgs : any = 'about.svg';

  constructor() { }

  ngOnInit() {
  }

}
