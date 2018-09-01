import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'career-app';
  photoa = '';
  photob = '';
  headimg = '';

  constructor() {
    this.photoa = 'assets/img/career1.jpeg';
    this.photob = 'assets/img/career2.jpeg';
    this.headimg = 'assets/img/bg.jpeg';
   }

  ngOnInit() {
  }
}
