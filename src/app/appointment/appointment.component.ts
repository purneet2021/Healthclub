import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent{

  constructor() { }

  public start(){
    document.getElementById('name')?.focus();
  }
  
  public Chosen:number = 0;
  public Amount:number = 0;
  public weeks: number = 0;
  public tobeshown: boolean = false;
  public therapist: string = '';
  public trainer:string = "";

  public defaultAmount(): void {
    this.Amount = (this.Chosen == 300)?3000:(this.Chosen == 400)?1600:500;
    if(this.therapist == "Yes")
      this.Amount = this.Amount + 200;
    if((this.Chosen == 300) || (this.Chosen == 400)){
      this.tobeshown = true;  
    } 
    else{
      this.tobeshown = false;
    }
  } 

  public calculateAmount(){
    this.Amount = (this.Chosen == 300)?300 * this.weeks * 5:(this.Chosen == 400)? 400 * this.weeks * 4: 500 * this.weeks;
    if(this.therapist == "Yes")
      this.Amount = this.Amount + 200;
  } 
  
  public name = "";
  public address1 = "";
  public address2 = "";
  public phone: number = 0;
  public age: number = 0;
  public email = "";
  public city = "";
  public country = "";
  public state = "";
  public pincode: number = 0;

  public isValid:boolean = false;
  public validate(){
    if((this.phone / 1000000000 < 1) || (this.age < 5) || (this.Chosen == 0) || (this.Amount == 0)){
      this.isValid = false;
    }
    else 
      if((this.name.length == 0) || (this.address1.length == 0) || (this.address2.length == 0) || (this.therapist.length == 0) || (this.trainer.length == 0)){
        this.isValid = false;
      }
      else 
        if(this.email.indexOf("@") == -1){
          this.isValid = false;
        }
        else 
          if((this.city.length == 0) || (this.country.length == 0) || (this.state.length == 0) || (this.pincode / 100000 < 1)){
            this.isValid = false;
          }
          else
            this.isValid = true;
    }
}
