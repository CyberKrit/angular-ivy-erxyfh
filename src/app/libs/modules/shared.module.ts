import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowDirective } from '../directives/structural.directive';
import { TestDirective } from '../directives/test.directive';
import { TestPipe } from '../pipe/test.pipe';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [TestPipe, TestDirective, ShowDirective],
  imports: [],
  exports: [RouterModule, TestPipe, TestDirective, ShowDirective],
  providers: [ApiService],
  entryComponents: [],
})
export class SharedModule {}
