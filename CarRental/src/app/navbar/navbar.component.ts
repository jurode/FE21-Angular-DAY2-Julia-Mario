import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  donatedMoney: number = 10;
  constructor() { }

  ngOnInit(): void {
  }
  countClick() {
    this.donatedMoney += 10;
  }
}
