import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElecCompPage } from './elec-comp.page';

const routes: Routes = [
  {
    path: '',
    component: ElecCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElecCompPageRoutingModule {}
