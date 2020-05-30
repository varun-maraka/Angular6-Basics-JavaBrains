import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-segment',
  templateUrl: './search-segment.component.html',
  styleUrls: ['./search-segment.component.css']
})
export class SearchSegmentComponent implements OnInit {
  userName: string ="";
  response: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  searchUser(){
    this.http.get('https://api.github.com/users/' + this.userName)
        .subscribe((resp) => {
          this.response = resp;
        })
  }
}
