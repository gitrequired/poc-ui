import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {
  suffixes:Array<string>;
  constructor() { }

  ngOnInit() {
    this.suffixes = ["Mr.","Mrs.","Miss.","Dr."];
  }

}
