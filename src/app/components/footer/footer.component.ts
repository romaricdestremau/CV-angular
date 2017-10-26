import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer:Footer[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getFooter().subscribe((footer) => {this.footer = footer;}),
    console.log('footer recieved')
  }

}

interface Footer{};
