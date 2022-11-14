import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";


@Component({
  selector: 'app-sugerenciagas',
  templateUrl: 'sugerenciagas.page.html',
  styleUrls: ['sugerenciagas.page.scss']
})
export class SugerenciaGasPage
 {

  input_tiempo = 'tiempo';
  rmv: number = 20;
  profundidad: number;
  velocidad: number = 10;
  distancia: number;
  tiempo: number;
  gas_requerido: number;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      rmv: [this.rmv, [Validators.required]],
      profundidad: [this.profundidad, [Validators.required]],
      tiempo: [this.tiempo, [Validators.required]],
      distancia: [this.distancia, []],
      velocidad: [this.velocidad, []],
   })
  }




  updateTiempo() {
    if (this.distancia && this.velocidad){
      console.log(this.tiempo ,this.distancia, this.velocidad);
      this.tiempo = this.distancia / this.velocidad;
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

    this.gas_requerido = 3 * ( this.tiempo * this.rmv * ((this.profundidad / 10) +1 ))
    
  }



  get sugerencias() {

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
        for (let j = 0; j < 10; j++) {
          combinacion.volumen_total += 11.1 * 200;
          combinacion.botellas.push(botellas[1])
          if (combinacion.volumen_total > this.gas_requerido) {
            break;
          }
        }
      }
      result.push(combinacion)
    }

    return result;
  }




  get errorControl() {
    return this.ionicForm.controls;
  }
}
