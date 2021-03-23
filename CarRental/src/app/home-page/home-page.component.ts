import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  cars = [
    {
      "brand": "VW",
      "type": "Golf 6",
      "PS": "130"
    }, {
      "brand": "Ford",
      "type": "Galaxy",
      "PS": "120"
    }, {
      "brand": "Toyota",
      "type": "Auris",
      "PS": "136"
    }
  ];

  add = new FormGroup({
    brand: new FormControl('', [Validators.required, Validators.minLength(2)]),
    type: new FormControl('', Validators.required),
    PS: new FormControl('', Validators.required),
  });

  addCar() {
    if (this.add.valid) {
      var a = this.add.value;

      console.log(this.cars);
      console.log(a);

      // push "a" to array
      this.cars.push(a);

    }

  }

  // by clicking on the #staffOnly, the "d-none" will be added or removed according if it is already there or not
  openStaffArea() {
    var element = document.getElementById("staffOnly");
    element.classList.toggle("d-none");
  }

}
