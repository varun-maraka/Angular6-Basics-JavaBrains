import { Component, OnInit, Input } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  @Input("userAttb") userObj: User;
  isCollapsed: boolean = true;
  buttText: String = "Expand";
  inputText: String = "Initial value";
  constructor() { }
  ngOnInit(): void {}

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed == true){
      this.buttText= "Expand";
    }else{
      this.buttText= "Collapse";
    }
  }
}
