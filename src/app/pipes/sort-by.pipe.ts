import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {

    if(array){
       console.log(array);
       let sortField = args[0];
        console.log("sortfield value :"+sortField);
       array.sort((a:any,b:any) =>{
         if ( a[sortField] < b[sortField]){
           console.log("small");
           return -1;
         }else if( a[sortField] > b[sortField]){
           console.log("big");
           return 1;
         }
         else{
           console.log("equal");
           return 0;
         }
       });
       return array;
      }
  
  }

}
