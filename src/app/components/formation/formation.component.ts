import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations:Formation[];
  experiences:Experience[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getFormations().subscribe((formations) => {this.formations = formations;}),
    this.dataService.getExperiences().subscribe((experiences) => {this.experiences = experiences;})
  }
}



interface Formation{}

interface Experience{}
