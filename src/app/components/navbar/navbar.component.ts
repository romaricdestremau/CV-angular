import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navIsFixed: boolean = false;
  public PageIsTop: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }



  // Doc http://brianflove.com/2016/10/10/angular-2-window-scroll-event-using-hostlistener/
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 42) {
      this.PageIsTop = false;
    } else{
      this.PageIsTop = true;
    }
    console.log('host listening is happenning');
  }

}
