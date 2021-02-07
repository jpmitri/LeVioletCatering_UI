import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';
  jsonReadData: any;
  interval: any;
  scrollBy: any;
  constructor(private httpService: HttpClient) {
    this.httpService.get('./assets/intervals.json').subscribe(
      data => {
        this.jsonReadData = data;
        this.interval = this.jsonReadData.customVariables.scroll.interval;
        this.scrollBy = this.jsonReadData.customVariables.scroll.scrollBy;
        console.log(this.interval);
        console.log(this.scrollBy);
      }
    );
  }
  onActivate(event): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        if (pos - this.scrollBy > 0) {
          window.scrollTo(0, pos - this.scrollBy); // how far to scroll on each step
        }
        else {
          window.scrollTo(0, 0);
        }
      } else {
        window.clearInterval(scrollToTop);
      }
    }, this.interval);
  }
}
