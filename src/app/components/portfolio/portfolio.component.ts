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
    trigger('focusImage', [
        state('inactive', style({
            transform: 'scale(1)',
            backgroundColor: '#eee'
        })),
        state('active', style({
            transform: 'scale(2)',
            backgroundColor: '#cfd8dc',
            'z-index': '10',
        })),
        transition('inactive => active', animate('200ms ease-in')),
        transition('active => inactive', animate('200ms ease-out'))
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
  portfolio: Portfolio[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  toggleZoom() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      console.log("togglemove")
  }

  constructor() { }

  ngOnInit() {
  }

}

interface Portfolio{};
