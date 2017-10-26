import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import manuel
import  { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormationComponent } from './components/formation/formation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Import manuel
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

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
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
