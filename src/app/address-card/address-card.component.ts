import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input("name") userNameArg: string;
  constructor() { }
  ngOnInit(): void {
    this.user = {
      name: this.userNameArg,
      title: 'Software developer',
      address: '1134 Main St, City, Stat, 100010',
      phone: [
        '123-234-2344','445-545-9656'
      ]
    }
  }
}
