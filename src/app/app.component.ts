import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Calcular Penetracion', url: 'penetracion', icon: 'walk' },
    { title: 'Sugerir Gas OC', url: 'sugerir', icon: 'color-wand' },
  ];
  public personalPages = [
    { title: 'Datos Personales', url: 'settings', icon: 'settings' },
  ];
  constructor() {}
}
