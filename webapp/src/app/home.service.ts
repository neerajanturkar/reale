import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }
  getProperties(filters: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify(filters);
    return this.http
        .post(this.apiUrl + 'property/', body, { headers: headers })
        .toPromise();
  }
}
