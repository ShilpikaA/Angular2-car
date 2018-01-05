import { Component, OnInit, ViewChild } from '@angular/core'
import { CarsService } from './../services/cars.service';
import { NgForm } from '@angular/forms';

@Component({

  selector: 'app-add-list-form',
  templateUrl: './add-list-form.component.html',
  styleUrls: ['./add-list-form.component.css']

})
export class AddListFormComponent implements OnInit {

  @ViewChild('newCarsForm') newCarsForm : NgForm;
  propertyTypes:Array<string> =['Economy','Small','Hatchback','MPV'];
  constructor(public carsService:CarsService) { }

  ngOnInit() {
  }
  onCarSubmit(data):void{
    
    this.carsService.addCar(data.value);
    //console.log(data.reset());
    this.newCarsForm.reset();

  }
}
