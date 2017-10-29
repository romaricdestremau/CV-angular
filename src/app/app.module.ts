import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import manuel
import  { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormationComponent } from './components/formation/formation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

// Import manuel
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HobbiesComponent,
    PortfolioComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDt9K2itm3hyv_g77RlGS4ggdP-asASq4g'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
