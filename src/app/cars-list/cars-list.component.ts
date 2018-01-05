import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CarsService } from './../services/cars.service';
import { UtilService } from './../services/util.service';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Array<any> ;
  error:string;
  sortFields: Array<string>=[
    'type',
    'name',
    'price'
  ];

  constructor(
            private http:Http,
            private carsService:CarsService,
            private utilService:UtilService
          ) { }

  ngOnInit() {
   this.carsService.getAllCars()
             .subscribe(
               data => this.cars = data,
               error => this.error = error.statusText
             );

         this.carsService.newCarSubject.subscribe(
           data => this.cars.push(data)
         )    
  }

}
