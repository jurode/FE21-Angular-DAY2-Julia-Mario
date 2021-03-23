import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  info = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.info.valid){
      
      var a = this.info.value;   
      console.log(a)
    }
   
  }


}
