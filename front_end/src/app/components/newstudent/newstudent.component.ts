import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".cool-b4-form .form-control").on("input", function() {
      if ($(this).val()) {
        $(this).addClass("hasValue");
      } else {
        $(this).removeClass("hasValue");
      }
    });
  }

}
