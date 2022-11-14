import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciaGasPage } from './sugerenciagas.page';

const routes: Routes = [
  {
    path: '',
    component: SugerenciaGasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SugerenciaGasPageRoutingModule {}
