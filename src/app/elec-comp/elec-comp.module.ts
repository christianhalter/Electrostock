import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElecCompPageRoutingModule } from './elec-comp-routing.module';

import { ElecCompPage } from './elec-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElecCompPageRoutingModule
  ],
  declarations: [ElecCompPage]
})
export class ElecCompPageModule {}
