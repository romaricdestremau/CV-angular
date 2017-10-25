import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  posts:Post[];

  constructor(private dataService:DataService) {
    console.log('constructor ran..')

  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.dataService.getFormations().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    })
  }
}



interface Post{
  id:number,
  title:string,
  body:string
}
