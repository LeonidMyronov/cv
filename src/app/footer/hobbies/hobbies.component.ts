import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  constructor() { }
  private section;
  private hobbies;
  

  ngOnInit() {
  
    this.section = {
          name: 'Hobbies',
          img: 'assets/img/section_interests.png'
      }
    this.hobbies = [
      {
        name: 'swimming',
        imgPath: 'assets/img/hobby6.png'
      },
       {
        name: 'billiard',
        imgPath: 'assets/img/hobby7.png'
      },
      {
        name: 'fishing',
        imgPath: 'assets/img/hobby3.png'
      },
      {
        name: 'skiing',
        imgPath: 'assets/img/hobby5.png'
      },
      
     
      {
        name: 'Hiking',
        imgPath: 'assets/img/hobby1.png'
      }
    ]
  }

}
