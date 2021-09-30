import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrency() {
    // Set Header
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    const api = 'https://restcountries.eu/rest/v2/all';

    return new Promise((resolve) => {
      this.http.get(api, { headers })
        .subscribe((data: any) => {
          resolve(data);
        });
    })
  }
}
