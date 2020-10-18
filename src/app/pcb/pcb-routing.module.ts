import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcbPage } from './pcb.page';

const routes: Routes = [
  {
    path: '',
    component: PcbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcbPageRoutingModule {}
