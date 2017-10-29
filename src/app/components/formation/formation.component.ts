import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  providers: [NgbProgressbarConfig]
})
export class FormationComponent implements OnInit {
  formations:Formation[];
  experiences:Experience[];
  competences:Competences[];

  constructor(private dataService:DataService, config: NgbProgressbarConfig) {
    config.max = 1000;
      config.striped = true;
      config.animated = true;
      config.type = 'success'; }

  ngOnInit() {
    this.dataService.getFormations().subscribe((formations) => {this.formations = formations;}),
    this.dataService.getExperiences().subscribe((experiences) => {this.experiences = experiences;}),
    this.dataService.getCompetences().subscribe((competences) => {this.competences = competences;})
  }
}



interface Formation{}

interface Experience{}

interface Competences{}
