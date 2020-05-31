import { Component } from '@angular/core';
import {User} from './address-card/user.model';
import { FirstServiceService } from './first-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
  user: User;
  apiResponse= null;

  homeRoute = 'home';
  settingsRoute = "settings";

  routes =[
    {linkName: 'Home ', url: 'home'},
    {linkName: 'Settings ', url: 'settings'}
  ]
  constructor(private svc: FirstServiceService, private http:HttpClient ){
    this.svc.printToConsole("Got the service....")
    this.user = new User();
    this.user = {
      name: "Foo Bar",
      designation: "Software Engineer",
      address: "1301 Stredd city",
      phone: [
        '323-323-2342','23423'
      ]
    }
  }
  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/varun-maraka');
    obs.subscribe((response)=>{
          console.log("Got the response..."+ response);
            this.apiResponse = response["login"] + " " +response["name"] + " " +response["url"];
          }
        );
  }
}
