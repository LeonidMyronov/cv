import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }
  private ln;
  private languages;
  ngOnInit() {
      this.ln = {
      url: 'http://ua.linkedin.com/in/leonidmyronov',
      imgPath: 'assets/img/in_b.png'
    };

    this.languages = [
      {
        name: 'ukraine',
        level: 'native',
        imgPath: 'assets/img/lang_ua.png'
      },
      {
        name: 'english',
        level: 'intermediate',
        imgPath: 'assets/img/lang_uk.png'
      },
      {
        name: 'russian',
        level: 'native',
        imgPath: 'assets/img/lang_ru.png'
      }
    ]

  }

}
