import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileData;
  public section = {
      name: 'Profile',
      img: 'assets/img/section_profile.png'
  }

  constructor() { }

  ngOnInit() {
    this.profileData = {
      name: 'Leonid Myronov',
      position: 'TL / Senior Frontend Engineer',
      imgPath: 'assets/img/leo2.jpg',
      // birth: new Date('16 jan 1976'),
      // phone: '+380 97 479 61 ##',
      mail: 'leonid.v.mironov@gmail.com',
      skype: 'borman11od'
    }

  }

}
