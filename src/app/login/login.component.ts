import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { LoginService } from "../service/login.service";
import "rxjs/Rx";
import { CookieService } from 'ngx-cookie-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUserExists: boolean;

  constructor(private router: Router, private service: LoginService, 
    private cookieService: CookieService, private modalService: NgbModal) { }

  ngOnInit() {
    if (this.cookieService.check("UID")) {
      this.router.navigate(['/home']);
    }
  }

  onLogin(loginForm: NgForm): any {
    console.log(loginForm.value);
    this.service.loginService(loginForm.value.userName, loginForm.value.password).subscribe(response => {
      //console.log("Success response :: " + response.userId );
      this.cookieService.set("UID", response);
      //this.cookieService.set("UName", response.username);
      this.router.navigate(['/home']);
    }, error => {
      console.log("error :: " + JSON.stringify(error.status));
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  saveDetails(){
    alert("saved");
  }
}
