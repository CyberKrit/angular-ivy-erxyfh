import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[test-dir]',
})
export class TestDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    console.log('DIRECTIVE');
  }
}
