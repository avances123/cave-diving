import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";
import { SettingsService } from '../Settings/settings.service';

@Component({
  selector: 'app-calculopenetracion',
  templateUrl: 'calculopenetracion.page.html',
  styleUrls: ['calculopenetracion.page.scss']
})
export class CalculoPenetracionPage {
  @ViewChild(IonModal) modal: IonModal;


  rmv: number = 20;
  velocidad_aleteo: number;
  velocidad_dpv: number;
  velocidad: number;
  usar_dpv: boolean;

  botellas_fondo = [{'capacidad':12, 'presion':200},{'capacidad':12, 'presion':200}];
  botellas_etapas = [];

  profundidad: number;
  gas_disponible: number = 0;
  tiempo_trabajo: number;
  penetracion_maxima: number;
  resultadoPintado = false;

  constructor(private settingsService: SettingsService) {
    this.init()
  }



  async init(){
    this.rmv = await this.settingsService.get('rmv') || 20;
    this.velocidad_aleteo = await this.settingsService.get('velocidad_aleteo') || 10;
    this.velocidad_dpv = await this.settingsService.get('velocidad_dpv') || 30;
    this.usar_dpv = await this.settingsService.get('usar_dpv') || false;
    this.velocidad = this.usar_dpv ? this.velocidad_dpv : this.velocidad_aleteo ;
  }

  onFondoClick(){
    this.botellas_fondo.push({'capacidad':12, 'presion': 200})
  }

  onEtapasClick(){
    this.botellas_etapas.push({'capacidad':11.1, 'presion': 200})
  }

  get botellas(){
    return [...this.botellas_fondo, ...this.botellas_etapas];
  }

  calcular() {
    // Sumar gas
    this.gas_disponible = 0;
    this.botellas.forEach( botella => this.gas_disponible += botella['capacidad'] * botella['presion'])

    // Calcular tiempo de ida con el gas que tengo
    console.log(this.gas_disponible, this.rmv, this.profundidad);
    const tiempo_total = this.gas_disponible  / (this.rmv * ((this.profundidad / 10) + 1 ));
    this.tiempo_trabajo = tiempo_total / 3;
    
    // Calcular penetracion maxima, es la distancia que puedo hacer aleteando con 1/3 de gas
    this.penetracion_maxima = this.tiempo_trabajo * this.velocidad;

    this.resultadoPintado = true;
  }
}
