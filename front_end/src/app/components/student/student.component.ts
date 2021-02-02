import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiConstant } from '../../core/constants/api.constant';
import { HttpHeaders } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  /* stutables=[
    {name:'student1',mobile:9988776655,email:'student1@gmail.com',dob:'09/11/1998',place:'chennai',age:15,roll:65,class:'A'},
    {name:'student2',mobile:8874493113,email:'student2@gmail.com',dob:'14/9/1998',place:'Trichy',age:14,roll:25,class:'C'},
    {name:'student3',mobile:9846831311,email:'student3@gmail.com',dob:'18/2/2000',place:'chennai',age:16,roll:26,class:'F'},
    {name:'student4',mobile:9874646416,email:'student4@gmail.com',dob:'01/5/1996',place:'Bangalore',age:16,roll:105,class:'A'},
    {name:'student5',mobile:8468313119,email:'student5@gmail.com',dob:'18/3/1998',place:'Karaikudi',age:14,roll:1,class:'D'},
    {name:'student6',mobile:9988776655,email:'student6@gmail.com',dob:'18/7/1998',place:'chennai',age:15,roll:22,class:'A'},
    {name:'student7',mobile:9986464655,email:'student7@gmail.com',dob:'25/11/1998',place:'chennai',age:14,roll:5,class:'A'},
    {name:'student8',mobile:9646476655,email:'student8@gmail.com',dob:'18/9/1998',place:'Cuddalore',age:15,roll:20,class:'C'},
    {name:'student9',mobile:6464776655,email:'student9@gmail.com',dob:'09/09/1999',place:'chennai',age:16,roll:10,class:'B'}
   
    
  ] */
  studentDetail: any;
  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAPIStudent();
  }

  ngAfterViewInit(){
    setTimeout(() => {
      $('#datatable').dataTable({

       
        "info": false,
        columnDefs : [
          { targets: [4,5], sortable: false}
        ]
      })
    }, 1000);
   }

   getAPIStudent(){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    console.log(options);
    this.http.get(apiConstant.getStudentDetails, options).subscribe((res: any) => {
      console.log(res)
      this.studentDetail = res;
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
