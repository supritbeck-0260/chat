import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideRecent'
})
export class HideRecentPipe implements PipeTransform {

  transform(value: any, input:string): any {
    if(input) return [];
    return value;
  }

}
