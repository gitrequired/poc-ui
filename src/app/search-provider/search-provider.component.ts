import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { SearchProvider } from "../service/searchprovider.service";
import "rxjs/Rx";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-search-provider',
  templateUrl: './search-provider.component.html',
  styleUrls: ['./search-provider.component.css']
})
export class SearchProviderComponent implements OnInit {

  constructor(private router: Router, private service: SearchProvider, private cookieService: CookieService) { }

  ngOnInit() {
    if(!this.cookieService.check("UID")){
      this.router.navigate(['/']);
    }
  }

  searchProvider(searchForm: NgForm): any {
    console.log(searchForm.value.searchText);
    //this is coming as undefined
    console.log(searchForm.value.selectedType);
    this.service.SearchProvider(searchForm.value.searchText, searchForm.value.selectedType).subscribe(response => {


  } , error => {
    console.log("error :: " + JSON.stringify(error.status));
  });
}
}
