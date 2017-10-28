import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('focusPanel', [
        state('inactive', style({
            transform: 'scale(1)',
            backgroundColor: '#eee'
        })),
        state('active', style({
            transform: 'scale(1.1)',
            backgroundColor: '#cfd8dc'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),

    trigger('movePanel', [

        transition('void => *', [
            animate(600, keyframes([
                style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ])

    ])
  ] //fin animation
}) // fin component
export class PortfolioComponent implements OnInit {

  state: string = 'inactive';

  toggleMove() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      console.log("togglemove")
  }
  itemAnim() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      console.log("togglemove")
  }

  constructor() { }

  ngOnInit() {
  }

  clickportfolio() {
    console.log("clik sur portfolio");
  }
  hoverportfolio() {
    console.log("clik sur portfolio");
  }

}
