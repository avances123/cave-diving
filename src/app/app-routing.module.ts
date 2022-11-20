import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gas/sugerir',
    pathMatch: 'full'
  },
  {
    path: 'gas/sugerir',
    loadChildren: () => import('./SugerenciaGas/sugerenciagas.module').then( m => m.SugerenciaGasPageModule)
  },
  {
    path: 'gas/penetracion',
    loadChildren: () => import('./CalculoPenetracion/calculopenetracion.module').then( m => m.CalculoPenetracionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
