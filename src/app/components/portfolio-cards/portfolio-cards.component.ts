import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss']
})
export class PortfolioCardsComponent implements OnInit {

  @Input('logo')logo:any;
  @Input('img')img:any;
  @Input('link')link:any;

  constructor() { }

  ngOnInit() {
  }

}
