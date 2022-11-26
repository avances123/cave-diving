import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';

import { SettingsPageRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SettingsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
export interface ISettings {
  sac: number;
  velocidad_aleteo: number;
  velocidad_dpv: number;
  usar_dpv: boolean;
}
