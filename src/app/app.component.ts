import { Component } from '@angular/core';
import {User} from './address-card/user.model';
import { FirstServiceService } from './first-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
  user: User;
  constructor(private svc: FirstServiceService ){
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
}
