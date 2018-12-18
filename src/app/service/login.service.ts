import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl: string = "http://localhost:8080/user/validate";

  constructor(private http: HttpClient) { }

  loginService(username: string, password: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    })
    let options = {
      headers: httpHeaders
    };
    let body = `username=${username}&password=${password}`;
    return this.http.post(this.loginUrl,body,options);
  }

}
