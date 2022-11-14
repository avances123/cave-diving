import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sugerir Gas', url: '/gas/Sugerir', icon: 'paper-plane' },
  ];
  public labels = ['cosita 1', 'cosita 2'];
  constructor() {}
}
