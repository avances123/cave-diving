import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tiempo/Distancia', url: 'penetracion', icon: 'walk' },
    { title: 'Gas', url: 'sugerir', icon: 'color-wand' },
    { title: 'Blender', url: 'blender', icon: 'sync' },
  ];
  public personalPages = [
    { title: 'Datos Personales', url: 'settings', icon: 'settings' },
  ];
  constructor() {}
}
