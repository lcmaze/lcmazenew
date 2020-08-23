import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input('small') small : any;
  @Input('big') big : any;

  constructor() { }

  ngOnInit() {
  }

}
