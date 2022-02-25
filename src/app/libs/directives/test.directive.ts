import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[testDir]',
})
export class TestDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  defaultBackdrop: string = 'inherit';
  defaultFontColor: string = 'inherit';

  @Input() hoverBackdrop: string;
  @Input() hoverFontColor: string;
  @Input() testDir: string;

  @HostBinding('style.background') backdrop: string;
  @HostBinding('style.color') fontColor: string;

  @HostListener('mouseenter', ['$event.target']) mouseEnterHandler(e: Event) {
    this.backdrop = this.hoverBackdrop || 'inherit';
    this.fontColor = this.hoverFontColor || 'inherit';
  }

  @HostListener('mouseleave', ['$event.target']) mouseLeaveHandler(e: Event) {
    this.backdrop = this.defaultBackdrop;
    this.fontColor = this.defaultFontColor;
  }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '40px');
    this.renderer.addClass(this.elRef.nativeElement, 'test-dir-classname');
  }
}
