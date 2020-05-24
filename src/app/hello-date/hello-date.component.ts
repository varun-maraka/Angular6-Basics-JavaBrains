import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-date',
  templateUrl: './hello-date.component.html',
  styleUrls: ['./hello-date.component.css']
})
export class HelloDateComponent implements OnInit {
  message: string = "hello from TypeScript";
  currTime: Date = new Date();
  currDate: string = new Date().toDateString();
  seccons: string =  this.currTime.getHours().toString()  + ":" +this.currTime.getMinutes().toString() + ":" + this.currTime.getSeconds().toString() ;
  constructor() { }
  ngOnInit(): void {
  }
}