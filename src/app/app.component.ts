import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  constructor(private router: Router) {}

  gotoPage(page: string) {
    console.log('HERE');
    this.router.navigate(['/post']);
  }
}
