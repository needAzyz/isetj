import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkage'
})
export class CheckagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
