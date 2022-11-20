import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculoPenetracionPageRoutingModule } from './calculopenetracion-routing.module';
import { CalculoPenetracionPage } from './calculopenetracion.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalculoPenetracionPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CalculoPenetracionPage]
})
export class CalculoPenetracionPageModule {}
