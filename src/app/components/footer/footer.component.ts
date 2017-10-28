import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title: string = 'Contactez moi';
  lat: number = 48.857777;
  lng: number = 2.285102;

  name: string = 'Romaric Destremau';
  phone: string = '+33 6 99225159'
  email: string = 'romaric.destremau@gmail.com';
  address: string = '5 rue de l\'alboni, 75016 Paris';


  footer:Footer[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getFooter().subscribe((footer) => {this.footer = footer;}),
    console.log('footer recieved')
  }

}

interface Footer{};
