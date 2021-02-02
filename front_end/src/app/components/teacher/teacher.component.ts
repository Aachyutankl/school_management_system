import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiConstant } from '../../core/constants/api.constant';
import { HttpHeaders } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

 
  teacherDetail: any;
  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    /* var getTeacherDet = apiConstant.getTeacherDetails
    console.log(getTeacherDet)
    var storeToken = this.tokenService.getToken();
    console.log(storeToken)*/
    // if (storeToken) {
      this.getAPITeacher();
    
    // } 

  }

  ngAfterViewInit(){
    setTimeout(() => {
      $('#datatable').dataTable({
        // "paging":   false,
       
        "info": false,
        columnDefs : [
          { targets: [4,5], sortable: false}
        ]
      })
    }, 1000);
   }
  getAPITeacher(){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    console.log(options);
    this.http.get(apiConstant.getTeacherDetails, options).subscribe((res: any) => {
      console.log(res)
      this.teacherDetail = res;
    })
  }
  logout() {
    $("#signOutmodal").modal('show');
    this.signout(confirm);
  }

  signout(confirm: any) {
    if (confirm == "yes") {
      this.router.navigate(['/login']);
    } else {
      $("#signOutmodal").modal('hide');
    }
    /* if (confirm == "yes") {
      const token = this.tokenService.getToken();
      const url = this.tokenService.SERVER_URL + "/api/logout"
      this.http.post(url, { token }).subscribe(() => {
        this.tokenService.deleteToken();
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err)
      })
    } else {
      $("#signOutmodal").modal('hide');
    } */
  }
}
