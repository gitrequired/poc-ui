import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  prefixes:Array<string>;
  constructor() { }

  ngOnInit() {
  this.prefixes = ["Mr.","Mrs.","Miss.","Dr."];
  }

}
