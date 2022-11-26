import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simple/penetracion',
    pathMatch: 'full'
  },
  {
    path: 'simple/sugerir',
    loadChildren: () => import('./SugerenciaGas/sugerenciagas.module').then( m => m.SugerenciaGasPageModule)
  },
  {
    path: 'simple/penetracion',
    loadChildren: () => import('./CalculoPenetracion/calculopenetracion.module').then( m => m.CalculoPenetracionPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./Settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
