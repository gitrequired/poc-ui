import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchProvider {

    host: string = "http://localhost:8080/provider/search";

    constructor(private http: HttpClient) { }

    SearchProvider(searchKey: string, searchType: string) {
        let httpHeaders = new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        })

        let options = {
            headers: httpHeaders
          };

        let url = this.host+searchKey+"/"+searchType;

        return this.http.get(url,options);
    }
}