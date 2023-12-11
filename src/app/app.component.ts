import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public idaYVueltaPages = [
    { title: 'Calcular distancia', url: 'simple/penetracion', icon: 'repeat' },
    { title: 'Calcular Gas', url: 'simple/sugerir', icon: 'color-wand' },
  ];
  public trabajoPages = [
    // { title: 'Calcular tiempo disponible', url: 'trabajo/penetracion', icon: 'repeat' },
    // { title: 'Calcular Gas', url: 'trabajo/sugerir', icon: 'color-wand' },
  ];
  
  public personalPages = [
    // { title: 'Blender', url: 'blender', icon: 'sync' },
    { title: 'Datos Personales', url: 'settings', icon: 'settings' },
  ];
  constructor() {}
}
