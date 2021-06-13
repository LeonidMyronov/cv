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
        company: 'Exadel',
        name: 'NDA',
        url: '',  
        technologies: 'Angular, Norwell Nx, NGXS, RxJs, TypeScript, ES7/6, KendoUI, Angular Material, SignalR, WebSockets, OData, REST, AzDO, Git',
        participation: `development from scratch new module of Enterprise tax platform, integration with other modules, creation high-level architect patterns and decisions. Leading the large (25 engineers) team , coordinations with other teams, POs, PMs`
      },
      // {
      //   company: 'AMERIA AG',
      //   name: 'NDA',
      //   url: '',
      //   technologies: 'Angular 7, AngularJS, TypeScript, ES5/6, Git',
      //   participation: `migrating legacy app parts and libraries from AngularJS and ES5 to TypeScript;  
      //   components rendering optimization `
      // },
      {
        company: 'Restaurant Magic Software',
        name: 'NDA',
        url: '',
        technologies: 'ANGULAR, Node.js, MongoDB, TYPESCRIPT, RxJs, ES6, HTML5, CSS3, Angular Material, RESTful, TFS',
        participation: `full development of ERP submodules; implementing catalogues caching; 
        replacing general table module to  Angular Material to embed drag&drop behavior; creating API endpoints`
      },
      {
        company: 'Unisoft',
        name: 'e-commerce',
        url: '',
        technologies: 'ANGULAR, AWS, Node.js, MongoDB, React, TYPESCRIPT, NgRx, RxJs, ES6, HTML5, CSS3, SCSS/SASS, Angular Material, Firebase, RESTful, Git',
        participation: `Full development process, negotiating with client, features disscussion and decomposition, conducting grooming sessions; 
        managing small Agile team (6 engineers - 3 FE, 1 UX, 1 QA, 1 BE)`
      }
      // {
      //   company: 'Plastic Jam',
      //   name: 'EAF',
      //   url: '',
      //   technologies: 'Angular 6/5, Typescript, NgRx, RxJs, ES6/ES5, HTML5, CSS3/Sass, WebSockets, Angular Material, MySQL, Git',
      //   participation: `Developing application from the scratch. Building software architecture, making decisions on key app points,
      //   Active participation in researches, process and standards. Code reviewing.`
      // },
      // {
      //   company: 'Plastic Jam',
      //   name: '99papers.com',
      //   url: 'http://my.99papers.com',
      //   technologies: 'Angular 4/5, AngularJS, Typescript, ES6/ES5, HTML5, CSS3/Sass, Bootstrap, Angular Material, SQL, MySQL, Git, Jira',
      //   participation: `Developing application from the scratch. 
      //   Migration an application from AngularJS 1.x to newer Angular 5. 
      //   Saving backlogs, adding new functionality.
      //   Active participation in researches, discussions and decisions on software architecture and internal coding, 
      //   architectural, process and standards.`
      // },
      // {
      //   company: 'Envion Software',
      //   name: 'mondeca.com',
      //   url: 'http://abap.envionsoftware.com',
      //   technologies: 'Angular 4, ES6, TypeScript, Webpack, HTML5, CSS3/Scss/Sass, Git',
      //   participation: 'Debugging, customization and functionality implementing at different components'
      // },
      // {
      //   company: 'Envion Software',
      //   name: 'envionsoftware.com',
      //   url: 'http://envionsoftware.com',
      //   technologies: 'HTML5, CSS3/Scss/Sass, JS, jQuery, Gulp, PHP, SQL, MySQL, CMS Wordpress, Git',
      //   participation: 'Everything from the scratch'
      // },
      // {
      //   company: 'Freelance',
      //   name: 'gallantra.com',
      //   url: 'http://gallantra.com',
      //   technologies: 'JS, jQuery, PHP, SQL, MySQL, CMS Wordpress',
      //   participation: 'Deployment and transfer website to the CMS, all BE works'
      // }
    ]

    this.section = {
          name: 'Portfolio',
          icon: 'assets/img/section_portfolio.png'
      }
  }

}
