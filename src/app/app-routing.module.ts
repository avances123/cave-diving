import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gas/Sugerir',
    pathMatch: 'full'
  },
  {
    path: 'gas/:id',
    loadChildren: () => import('./SugerenciaGas/sugerenciagas.module').then( m => m.SugerenciaGasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
