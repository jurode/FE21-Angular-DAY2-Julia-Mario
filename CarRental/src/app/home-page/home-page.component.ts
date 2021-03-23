import { Component, OnInit } from '@angular/core';

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
  ]

}
