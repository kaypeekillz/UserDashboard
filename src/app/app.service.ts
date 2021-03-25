import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getStat() {
    return this.http.get('https://604a2d3b9251e100177ce1ae.mockapi.io/api/v2/dashboard'); 
  }
}
