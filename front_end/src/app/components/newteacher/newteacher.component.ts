import { Component, OnInit } from '@angular/core';
//declare var $: any;
//declare var jQuery: any;
//import * as $ from "jquery";
//declare let $: any;
@Component({
  selector: 'app-newteacher',
  templateUrl: './newteacher.component.html',
  styleUrls: ['./newteacher.component.scss']
})
export class NewteacherComponent implements OnInit {

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
