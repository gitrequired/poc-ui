import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  route: string;
  showHF: boolean;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != "/login" || "") {
        this.showHF = true;
      } else {
        this.showHF = false;
      }
    });
  }

  ngOnInit() {

  }
}
