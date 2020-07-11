import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {

    return value.sort((a, b) => a.name.localeCompare(b.name)
    // {
    //   if(a[arg1] > b[arg1]){
    //     return 1;
    //   }else {return -1;}
    // }
    );

  }
}
