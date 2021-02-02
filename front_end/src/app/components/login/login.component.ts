import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service'
import { apiConstant } from '../../core/constants/api.constant';
import { HttpHeaders } from '@angular/common/http';
declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  Login: boolean = false;
  user: any;
  hide: boolean = false;
  password = '';
  username = '';
  constructor(private formBuilder: FormBuilder, public router: Router, private http: HttpClient, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    /* this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.maxLength, Validators.pattern('^[0-9a-zA-Z]+$')]],
      password: [null, [Validators.required, Validators.maxLength, Validators.minLength]],
      styles: ['.form-group { margin-bottom: 5rem; }']
    }); */
  }

  login() {
    this.user = {
      username: this.username,
      password: this.password,
    };
    console.log(this.user)
    /* const options = {
      headers: new HttpHeaders({
        //'Authorization': '',
        'Content-Type': 'application/json',
      }),

    };
    this.http.post(apiConstant.Login, this.user, options).subscribe((res: any) => {
      console.log(res)
    }); */

    //Admin
    if(this.username === "Kishore" && this.password === "12345678"){
      this.router.navigate(['/teacher']);
    }else if(this.username === "Rohit" && this.password === "12345678"){
      this.router.navigate(['/teacher']);
    }else if(this.username === "Kumar" && this.password === "12345678"){
      this.router.navigate(['/teacher']);
    }else if(this.username === "Ganesh" && this.password === "12345678"){
      this.router.navigate(['/teacher']);
    }
    else{
      $("#validUserModal").modal('show');
    }
    
  
  }


}

