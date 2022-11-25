import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";
import { SettingsService } from '../Settings/settings.service';


@Component({
  selector: 'app-sugerenciagas',
  templateUrl: 'sugerenciagas.page.html',
  styleUrls: ['sugerenciagas.page.scss']
})
export class SugerenciaGasPage {
  @ViewChild(IonModal) modal: IonModal;

  
  rmv: number = 20;
  velocidad_aleteo: number;
  velocidad_dpv: number;
  velocidad: number;
  usar_dpv: boolean;
  
  profundidad: number;
  input_tiempo = 'tiempo';
  distancia: number;
  tiempo: number;
  gas_requerido: number;
  ionicForm: FormGroup;
  isSubmitted = false;
  resultadoPintado = false;
  sugerencias =  [];


  constructor(public formBuilder: FormBuilder, private settingsService: SettingsService) {

    this.init();

    this.ionicForm = this.formBuilder.group({
      profundidad: [this.profundidad, [Validators.required]],
      tiempo: [this.tiempo, [Validators.required]],
      distancia: [this.distancia, []],
   })
  }


  async init(){
    this.rmv = await this.settingsService.get('rmv') || 20;
    this.velocidad_aleteo = await this.settingsService.get('velocidad_aleteo') || 10;
    this.velocidad_dpv = await this.settingsService.get('velocidad_dpv') || 30;
    this.usar_dpv = await this.settingsService.get('usar_dpv') || false;
    this.velocidad = this.usar_dpv ? this.velocidad_dpv : this.velocidad_aleteo ;
  }


  updateTiempo() {
    if (this.distancia && this.velocidad){
      console.log(this.tiempo ,this.distancia, this.velocidad);
      this.tiempo = this.distancia / this.velocidad;
    }
    this.calcular()
  }

  updateDistancia() {
    if (this.tiempo && this.velocidad){
      console.log(this.tiempo ,this.distancia, this.velocidad);
      this.distancia = this.tiempo * this.velocidad;
    }
    this.calcular()
  }

  calcular() {
    this.isSubmitted = true;

    console.log(this.ionicForm)
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }

    this.gas_requerido = 3 * ( this.tiempo * this.rmv * ((this.profundidad / 10) + 1 ))
    this.sugerencias = this.calcularSugerencias();
    this.resultadoPintado = true;
  }



  calcularSugerencias() {

    var result = [];
    const botellas = [
      {capacidad:12,descripcion:'12 L Acero',presion:200},
      {capacidad:11.1,descripcion:'S80 Aluminio', presion:200}
    ]


    for (let i = 0; i < botellas.length; i++) {
      const botella = botellas[i];
      var combinacion = {
        volumen_total: 2 * botella.capacidad * 200,
        botellas: Array(2).fill(botella)
      }

      if (combinacion.volumen_total < this.gas_requerido) {
        for (let j = 0; j < 5; j++) {
          combinacion.volumen_total += 11.1 * 200;
          combinacion.botellas.push(botellas[1])
          if (combinacion.volumen_total > this.gas_requerido) {
            break;
          }
        }
      }
      result.push(combinacion)
    }
    console.log('Sugerencia:' + result);
    return result;
  }


  cancelModal() {
    this.modal.dismiss(null, 'cancel');
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
}
