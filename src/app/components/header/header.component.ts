import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string;
  headline:string;

  constructor() { }

  ngOnInit() {
    this.name = 'Romaric Destremau';
    this.headline = 'En alternance chez Edmond de Rothschild';
  }

}
