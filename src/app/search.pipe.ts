import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], search:string): any {
    if(!value) return [];
    if(!search) return value;
    
    return value.filter(data=>data.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
