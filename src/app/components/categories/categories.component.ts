import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input('inverted') inverted : boolean = false;
  @Input('smallcap') smallcap : any;
  @Input('bigcap') bigcap : any;
  @Input('description') description : any;
  @Input('image') image : any;

  @Input('icn1') icn1 : any;
  @Input('cap1') cap1 : any;
  @Output('click1') click1 = new EventEmitter();

  @Input('icn2') icn2 : any;
  @Input('cap2') cap2 : any;
  @Output('click2') click2 = new EventEmitter();  

  @Input('icn3') icn3 : any;
  @Input('cap3') cap3 : any;
  @Output('click3') click3 = new EventEmitter();

  @Input('icn4') icn4 : any;
  @Input('cap4') cap4 : any;
  @Output('click4') click4 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  btnclick1(){
    this.click1.emit();
    console.log('aaa');
  }
  btnclick2(){
    this.click2.emit();
  }
  btnclick3(){
    this.click3.emit();
  }
  btnclick4(){
    this.click4.emit();
  }

}
