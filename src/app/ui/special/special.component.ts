import { Component, OnInit } from '@angular/core';

declare const mfn_sectionH: any;
declare const mfn_introH: any;
declare const parallax: any;
declare const mfn_equalH_wrap: any;
declare const testfunc: any;
declare const testfunc2: any;
declare const mfn_equalH: any;

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    mfn_sectionH();
    mfn_introH();
    parallax();
    mfn_equalH_wrap();
    testfunc();
    mfn_equalH();
    testfunc2();
  }
  scrollToTop(): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 40); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
