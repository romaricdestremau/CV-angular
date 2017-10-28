import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data services connected.');
  }

  getFormations(){
    console.log('formation recu')
    return this.http.get('../../assets/formations.json').map(res => res.json());
  }

  getExperiences(){
    console.log('experience recu')
    return this.http.get('../../assets/experiences.json').map(res => res.json());
  }

  getCompetences(){
    console.log('competences recu')
    return this.http.get('../../assets/competences.json').map(res => res.json());
  }

  getFooter(){
    console.log('footer recu')
    return this.http.get('../../assets/footer.json').map(res => res.json());
  }

}
