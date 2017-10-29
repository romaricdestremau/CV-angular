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

import { Image } from './image';

const IMAGES: Image[] = [
  { id: 1, state: 'inactive' },
  { id: 2, state: 'inactive' },
  { id: 3, state: 'inactive' },
  { id: 4, state: 'inactive' },
  { id: 5, state: 'inactive' },
  { id: 6, state: 'inactive' },
  { id: 7, state: 'inactive' },
  { id: 8, state: 'inactive' },
  { id: 9, state: 'inactive' },
  { id: 10, state: 'inactive' },
  { id: 11, state: 'inactive' },
  { id: 12, state: 'inactive' }
];

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
    ])
  ] //fin animation
}) // fin component

export class PortfolioComponent implements OnInit {
  title = 'Mon voyage en image!';
  images = IMAGES;
  selectedImage: Image;

  toggleZoom() {
      this.selectedImage.state = (this.selectedImage.state === 'inactive' ? 'active' : 'inactive');
      console.log("togglemove")
  }

  constructor() { }

  ngOnInit() { }

}

interface Portfolio{
  state: string;
  id: number;
};
