import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school';
  apiEndPoint: string = "";
  headers: HttpHeaders;
  constructor(private router: Router,private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
}
