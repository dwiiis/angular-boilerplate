import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBasicComponent } from './component/table-basic/table-basic.component';

const routes: Routes = [
  {
    path: 'basic',
    component: TableBasicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableTestRoutingModule {}
