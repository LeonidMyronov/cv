import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
section = {
      name: 'Hobbies',
      img: 'assets/img/section_interests.png'
  }
  constructor() { }

  ngOnInit() {
  }

}
