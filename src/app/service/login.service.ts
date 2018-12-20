import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl: string = "https://hcsc-login-bright-toucan.cfapps.io/user/validate";
  createUserUrl: string = "https://hcsc-login-bright-toucan.cfapps.io/user/create";
  updateUserUrl: string = "https://hcsc-login-bright-toucan.cfapps.io/user/changePassword";

  constructor(private http: HttpClient) { }

  loginService(username: string, password: string): any {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
    let options = {
      headers: httpHeaders
    };
    let body = `username=${username}&password=${password}`;
    return this.http.post(this.loginUrl, body, options);
  }

  createUserService(username: string, ssn: string, password: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
    let options = {
      headers: httpHeaders
    };
    let body = `username=${username}&password=${password}&ssn=${ssn}`;
    return this.http.put(this.createUserUrl, body, options);
  }

  updateUserService(ssn: string, password: string, npassword: string, cpassword: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
    let options = {
      headers: httpHeaders
    };
    let body = `ssn=${ssn}&password=${password}&npassword=${npassword}&cpassword=${cpassword}`;
    return this.http.put(this.updateUserUrl, body, options);
  }

}
