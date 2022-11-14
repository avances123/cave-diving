import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SugerenciaGasPage } from './sugerenciagas.page';

import { SugerenciaGasPageRoutingModule } from './sugerenciagas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SugerenciaGasPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SugerenciaGasPage]
})
export class SugerenciaGasPageModule {}
