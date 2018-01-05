import { Component, OnInit, Input } from '@angular/core';
import { Car } from './../car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

   @Input('car')car:Car;
  constructor() { }

  ngOnInit() {
    let description = this.car.description;
  }

}
