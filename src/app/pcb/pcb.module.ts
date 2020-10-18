import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcbPageRoutingModule } from './pcb-routing.module';

import { PcbPage } from './pcb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcbPageRoutingModule
  ],
  declarations: [PcbPage]
})
export class PcbPageModule {}
