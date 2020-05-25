import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-date',
  templateUrl: './hello-date.component.html',
  styleUrls: ['./hello-date.component.css']
})
export class HelloDateComponent implements OnInit {
  message: string = "hello from TypeScript";
  dateMsg: string;
  currTime: Date = new Date();
  currDate: string = new Date().toDateString();
  seccons: string =  this.currTime.getHours().toString()  + ":" +this.currTime.getMinutes().toString() + ":" + this.currTime.getSeconds().toString() ;
  constructor() { 
    setInterval(()=> {
      let currentDate = new Date();
      this.dateMsg = currentDate.toDateString() + ':' + currentDate.toLocaleTimeString() ;
    },1000)
    
  }
  ngOnInit(): void {
  }

  addTwoNumbers(a: number, b: number){
    return a+b;
  }
}