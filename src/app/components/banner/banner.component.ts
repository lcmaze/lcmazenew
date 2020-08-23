import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input('description') description : any;
  @Input('smallcap') smallcap : any;
  @Input('bigcap') bigcap : any;
  @Input('btnvisible') btnvisible : boolean = true;

  @Output('clicks') clicks = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnclick(){
    this.clicks.emit();
  }

}
