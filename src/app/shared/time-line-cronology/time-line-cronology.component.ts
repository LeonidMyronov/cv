import { Component, OnInit, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-time-line-cronology',
  templateUrl: './time-line-cronology.component.html',
  styleUrls: ['./time-line-cronology.component.css']
})
export class TimeLineCronologyComponent implements OnInit, AfterViewInit {
  @Input('event') event;
  public duration;

  constructor() { }

  ngOnInit() {
    if(this.event.periods.start){
      this.duration = this.days_between(this.event.periods.end, this.event.periods.start);
      this.duration = this.durationToView(this.duration);
    }
  }

  ngAfterViewInit(){
  }

  days_between(date1, date2) {

    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    const date1_ms = date1.getTime();
    const date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY);
  }

  durationToView(days) {
    const years = Math.floor(days / 365);
    const months = Math.floor(days % 365 / 30);
    // console.log('y=>', years, 'm=>', months);
    return {years: years, months: months};
  }

}
