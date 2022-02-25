import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestDirective } from '../directives/test.directive';
import { TestPipe } from '../pipe/test.pipe';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [TestPipe, TestDirective],
  imports: [],
  exports: [RouterModule, TestPipe, TestDirective],
  providers: [ApiService],
  entryComponents: [],
})
export class SharedModule {}
