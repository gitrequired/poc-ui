import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { SearchProvider } from "../service/searchprovider.service";
import "rxjs/Rx";
import { CookieService } from 'ngx-cookie-service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-provider',
  templateUrl: './search-provider.component.html',
  styleUrls: ['./search-provider.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SearchProviderComponent implements OnInit {

  constructor(private router: Router, private service: SearchProvider,
    private cookieService: CookieService, config: NgbModalConfig,
    private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    if (!this.cookieService.check("UID")) {
      this.router.navigate(['/']);
    }
  }

  searchProvider(searchForm: NgForm): any {
    alert("clicked");
  }

  open(content) {
    this.modalService.open(content);
  }
}
