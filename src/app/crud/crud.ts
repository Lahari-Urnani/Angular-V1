import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit{
  userName: string  = "Lahari";
  //#region Signal
  emailId = signal("lahariurnani0049@gmail.com");
  rollnumber = signal<number>(101);
  studentDetails = signal<any>({
    studentname: "lahari",
    rollnumber:101,
    emailId : "lahariurnani0049@gmail.com",
  });
  //#endregion

  constructor(){
    console.log(this.userName);
  }
  ngOnInit(): void {
     
  }
  ShowAlert(){
    alert("Clicked on Show Alert Button")
  }
   OnStateChange(selectElement: EventTarget | null){
    //const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement);
    if(selectElement instanceof HTMLSelectElement){
      const State = selectElement.value;
      alert("State is changed to : ${State}");
    }
   }
   //#region Signal
   OnRollNumberChange(){
    this.rollnumber.set(102); //set property of signal will update the value directly
   }
  
   EditEmail(updatedemail:string){
    this.studentDetails.update((old:any)=>({...old,emailId:updatedemail}));
   }
   //#endregion
  
}
