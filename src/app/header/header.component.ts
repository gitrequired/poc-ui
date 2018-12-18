import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  userId :string;
  ngOnInit() {
    this.userId = this.cookieService.get("UID");
  }

  logOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }
}
