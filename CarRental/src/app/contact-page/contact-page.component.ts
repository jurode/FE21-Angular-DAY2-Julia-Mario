import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {
  

  info = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    age: new FormControl('',[Validators.required, Validators.maxLength(3)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    city:new FormControl('',[Validators.required, Validators.minLength(2)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.info.valid){
      
      var a = this.info.value;   
      console.log(a)
      alert('Thank you. We will contact you shortly!')
    } else {
      alert("Please enter your contact details");
      
    }
   
  }


}



