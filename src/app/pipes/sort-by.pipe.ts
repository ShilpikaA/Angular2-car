import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',pure:false
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<Object>, args: any): Array<Object> {
console.log("calling pipe");
    if(array == null){
      return null;
    }
             console.log(array);
             console.log(args);
           var temp=args;
           let dir=args.direction=='desc'?1:-1;
        //console.log("sortfield value :"+sortField);
       array.sort((a:any,b:any) =>{
         if ( a[args.property] > b[args.property]){
           console.log("big");
           return -1*dir;
         }else if( a[args.property]< b[args.property]){
           console.log("small");
           return 1*dir;
         }
         else{
           console.log("equal");
           return 0;
         }
       });
       return array;
      }
  
  }


