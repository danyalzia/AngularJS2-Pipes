import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
  // You can uncomment the following line to make the pipe impure
  //,pure: false
})
export class SquarePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * value;
  }

}
