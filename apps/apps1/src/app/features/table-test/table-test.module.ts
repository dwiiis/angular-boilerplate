import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTestRoutingModule } from './table-test-routing.module';
import { TableBasicComponent } from './component/table-basic/table-basic.component';

@NgModule({
  declarations: [TableBasicComponent],
  imports: [CommonModule, TableTestRoutingModule],
})
export class TableTestModule {}
