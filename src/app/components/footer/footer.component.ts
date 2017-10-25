import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name:string;
  age:number;
  email: string;
  address:Address;
  timetocall:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Romaric Destremau';
    this.age = 22;
    this.email = 'romaric.destremau@gmail.com';
    this.address = {
      street:'5 rue de lalboni',
      city: 'Paris',
      zipcode: 75016,
      state: 'France'
    }
    this.timetocall = ['8h-12h','14h-18h'];

  }

  onClick(){
    console.log('hello');
  }

}

interface Address{
  street:string,
  city:string,
  zipcode:number,
  state:string
}
