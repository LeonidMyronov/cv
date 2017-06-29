import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
section = {
      name: 'Portfolio',
      icon: 'assets/img/section_portfolio.png'
  }
  constructor() { }

  ngOnInit() {
  }

}
