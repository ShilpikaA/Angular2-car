import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

   public newCarSubject = new Subject<any>();

  constructor(private http:Http) { }
  getAllCars()
  {
    return this.http.get('data/cars.json').map(res => res.json());
  }
 
     addCar(data){
       data.image = 'default-car';
       this.newCarSubject.next(data);
     }
}
