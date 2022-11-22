import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent{

  constructor() { }
  public name: string = "";
  public email: string = "";
  public phone: number  = 0;
  public message: string = "";

  public isValid = false;
  public validate(){
    if(this.phone / 1000000000 <= 1){
      this.isValid = false;
    }
    else
      if((this.name.length == 0) ||  (this.message.length == 0) || (this.email.length == 0)){
        this.isValid = false;
      }
      else
        if(this.email.indexOf("@") == -1){
          this.isValid = false;
        }
        else
          this.isValid = true;
  }
}
