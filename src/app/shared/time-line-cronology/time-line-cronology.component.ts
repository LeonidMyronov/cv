import { Component, OnInit, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-time-line-cronology',
  templateUrl: './time-line-cronology.component.html',
  styleUrls: ['./time-line-cronology.component.css']
})
export class TimeLineCronologyComponent implements OnInit, AfterViewInit {
  @Input('event') event;
  private duration;

  constructor() { }

  ngOnInit() {
    if(this.event.periods.start){
      this.duration = this.days_between(this.event.periods.end, this.event.periods.start);
      this.duration = this.durationToView(this.duration);
      // console.log(this.duration);
      
    }
    
  }

  ngAfterViewInit(){
  }

  days_between(date1, date2) {  

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)
  }

  durationToView(days){
    let years = Math.floor(days/365);
    let months = Math.floor(days%365/30);
    // console.log('y=>', years, 'm=>', months);
    return {years: years, months: months};
  }

}
