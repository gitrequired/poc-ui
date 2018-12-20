import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { LoginService } from "../service/login.service";
import { Subject } from "rxjs/Rx";
import { CookieService } from 'ngx-cookie-service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  loggedUser: string;
  errorMessage: string;
  successMessage: string;

  constructor(private router: Router, private service: LoginService,
    private cookieService: CookieService, private modalService: NgbModal) { }

  ngOnInit() {
    if (this.cookieService.check("UID")) {
      this.router.navigate(['/home']);
    }

    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(this.errorMessage);
  }

  onLogin(loginForm: NgForm): any {

    if ((loginForm.value.userName != null || loginForm.value.password != null)) {
      this.service.loginService(loginForm.value.userName, loginForm.value.password)
        .subscribe(response => {
          this.loggedUser = response.userId;
          this.cookieService.set("UID", this.loggedUser);
          this.router.navigate(['/home']);
        }, error => {
          this.errorMessage = error.error;
          this.changeSuccessMessage();
          loginForm.reset();
        });
    } else {
      this.errorMessage = "Null cannot be accepted";
      this.changeSuccessMessage();
      loginForm.reset();
    }

  }

  createUser(createUserForm: NgForm): any {
    if (createUserForm.value.userName != null,
      createUserForm.value.ssn != null, createUserForm.value.password != null) {
      this.service.createUserService(createUserForm.value.userName,
        createUserForm.value.ssn, createUserForm.value.password)
        .subscribe(response => {
          alert("Succesfully user created");
          this.router.navigate(['/']);
        }, error => {
          alert(error.error);
          createUserForm.reset();
        });
    } else {
      alert("Null cannot be accepted");
    }


  }

  changePassword(cPassword: NgForm): any {
    if (cPassword.value.ssn != null,
      cPassword.value.password != null,
      cPassword.value.npassword != null,
      cPassword.value.cpassword != null) {
      this.service.updateUserService(cPassword.value.ssn,
        cPassword.value.password, cPassword.value.npassword, cPassword.value.cpassword)
        .subscribe(response => {
          alert("Succesfully changed password");
          this.router.navigate(['/']);
        }, error => {
          alert(error.error);
          cPassword.reset();
        });
    } else {
      alert("Null cannot be accepted");
    }

  }

  open(content) {
    this.modalService.open(content);
  }
}
