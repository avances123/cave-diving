import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";


@Component({
  selector: 'app-calculopenetracion',
  templateUrl: 'calculopenetracion.page.html',
  styleUrls: ['calculopenetracion.page.scss']
})
export class CalculoPenetracionPage {
  @ViewChild(IonModal) modal: IonModal;

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
