import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  ngOnInit() {
    $(".option").click(function(){
      $(".option").removeClass("active");
      $(this).addClass("active");

   });

  }

}
