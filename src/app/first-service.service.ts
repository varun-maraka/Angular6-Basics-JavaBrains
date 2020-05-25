import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  printToConsole(arg){
    console.log(arg);
  }
  constructor() { }
}