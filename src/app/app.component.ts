import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sugerir Gas OC', url: '/gas/sugerir', icon: 'color-wand' },
    { title: 'Calcular Penetracion', url: '/gas/penetracion', icon: 'walk' },
  ];
  public labels = ['cosita 1', 'cosita 2'];
  constructor() {}
}
