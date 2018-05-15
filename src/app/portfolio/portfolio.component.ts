import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public section;
  public portfolios;
  constructor() { }
  ngOnInit() {

    this.portfolios = [
      {
        name: 'EAF',
        url: '',
        technologies: 'Angular 6/5, Typescript, NgRx, RxJs, ES6/ES5, HTML5, CSS3/Sass, WebSockets, Angular Material, MySQL, Git',
        participation: `Developing application from the scratch. Building software architecture, making decisions on key app points,
        Active participation in researches, process and standards. Code reviewing.`
      },
      {
        name: '99papers.com',
        url: 'http://my.99papers.com',
        technologies: 'Angular 4/5, AngularJS, Typescript, ES6/ES5, HTML5, CSS3/Sass, Bootstrap, Angular Material, SQL, MySQL, Git, Jira',
        participation: `Developing application from the scratch. 
        Migration an application from AngularJS 1.x to newer Angular 5. 
        Saving backlogs, adding new functionality.
        Active participation in researches, discussions and decisions on software architecture and internal coding, 
        architectural, process and standards.`
      },
      {
        name: 'mondeca.com',
        url: 'http://abap.envionsoftware.com',
        technologies: 'Angular 4, ES6, TypeScript, Webpack, HTML5, CSS3/Scss/Sass, Git',
        participation: 'Debugging, customization and functionality implementing at different components'
      },
      {
        name: 'envionsoftware.com',
        url: 'http://envionsoftware.com',
        technologies: 'HTML5, CSS3/Scss/Sass, JS, jQuery, Gulp, PHP, SQL, MySQL, CMS Wordpress, Git',
        participation: 'Everything from the scratch'
      },
      {
        name: 'gallantra.com',
        url: 'http://gallantra.com',
        technologies: 'JS, jQuery, PHP, SQL, MySQL, CMS Wordpress',
        participation: 'Deployment and transfer website to the CMS, all BE works'
      }
    ]

    this.section = {
          name: 'Portfolio',
          icon: 'assets/img/section_portfolio.png'
      }
  }

}
