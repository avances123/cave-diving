import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  gas_disponible: number = 0;
  botellas_fondo = [{'capacidad':12, 'presion_trabajo':200},{'capacidad':12, 'presion_trabajo':200}];
  botellas_etapas = [];


  constructor() {}

  onFondoClick(){
    this.botellas_fondo.push({'capacidad':12, 'presion_trabajo': 200})
  }

  onEtapasClick(){
    this.botellas_etapas.push({'capacidad':11.1, 'presion_trabajo': 200})
  }

  get botellas(){
    return [...this.botellas_fondo, ...this.botellas_etapas];
  }

  calcular() {
    this.botellas.forEach( botella => this.gas_disponible += botella['capacidad'] * botella['presion_trabajo'])
    console.log(this.gas_disponible)
  }

}
