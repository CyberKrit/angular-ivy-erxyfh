import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('magic', { static: true }) magicRef: ElementRef;
  @ViewChildren('testRef') testRef: QueryList<any>;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.testRef.map((each) => console.log(each));
    console.log(this.magicRef.nativeElement.innerHTML);
  }

  gotoPage(page: string) {
    this.router.navigate(['/post']);
  }
}
