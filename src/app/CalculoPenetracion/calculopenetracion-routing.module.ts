import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoPenetracionPage } from './calculopenetracion.page';

const routes: Routes = [
  {
    path: '',
    component: CalculoPenetracionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculoPenetracionPageRoutingModule {}
