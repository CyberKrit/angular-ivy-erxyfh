import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!value) return;

    const wordCase: string = args[0];

    const chars =
      wordCase === 'upper'
        ? value.toUpperCase()
        : wordCase === 'lower'
        ? value.toLowerCase()
        : value;

    const outputLen = args[1];
    return typeof outputLen === 'number' ? chars.substr(0, outputLen) : chars;
  }
}
