import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route: string;
  showHF: boolean;

  constructor(private location: Location, private router: Router, private cookieService: CookieService) {
    router.events.subscribe((val) => {
      if (location.path() != "/login" || "") {
        this.showHF = true;
      } else {
        this.showHF = false;
      }
    });
  }

  ngOnInit() {
    let routeString = this.route;
    this.showHF = true;
    //comments
    //comments - 2
    //comments - 2
  }
}
