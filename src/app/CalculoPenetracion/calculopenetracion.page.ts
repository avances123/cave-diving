import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { SettingsService } from '../Settings/settings.service';
import { BuhlmannAlgorithm } from '../scuba-physics/BuhlmannAlgorithm'

@Component({
  selector: 'app-calculopenetracion',
  templateUrl: 'calculopenetracion.page.html',
  styleUrls: ['calculopenetracion.page.scss']
})
export class CalculoPenetracionPage {
  @ViewChild(IonModal) modal: IonModal;
  isModalOpen = false;

  sac: number = 20;
  velocidad_aleteo: number;
  velocidad_dpv: number;
  velocidad: number;
  usar_dpv: boolean = false;
  solo_diving: boolean = false;

  botellas_fondo = [{'capacidad':12, 'presion':200},{'capacidad':12, 'presion':200}];
  botellas_etapas = [];

  profundidad: number = 20;
  gas_disponible: number = 0;
  tiempo_trabajo: number; // el tercio  tipico
  tiempo_ida: number; // puede ser menos que tiempo_trabajo si vas con dpv
  penetracion_maxima: number;
  presion_retorno:number;
  resultadoPintado = false;
  algoritmo: string = "tercios";
  abandonar_etapas = true;

  constructor(private settingsService: SettingsService) {
    this.init()
    const algo = new BuhlmannAlgorithm();
  }

  async init(){
    this.sac = await this.settingsService.get('sac') || 20;
    this.velocidad_aleteo = await this.settingsService.get('velocidad_aleteo') || 10;
    this.velocidad_dpv = await this.settingsService.get('velocidad_dpv') || 30;
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


  toggleModal(isOpen: boolean) {
    console.log("abriendo", isOpen)
    this.isModalOpen = isOpen;
  }



  calcular() {

    // Sumar Gas
    this.gas_disponible = 0;
    this.botellas.forEach( botella => this.gas_disponible += botella.capacidad * botella.presion )

    // Calcular tiempo de ida con el gas que tengo
    const tiempo_total = this.gas_disponible  / (this.sac * ((this.profundidad / 10) + 1 ));
    switch (this.algoritmo) {
      case 'tercios':
        this.tiempo_trabajo = tiempo_total / 3;
        break;
      case 'cuartos':
        this.tiempo_trabajo = tiempo_total / 4;
        break;
      case 'gue': //En GUE el viaje de ida son 5/18 avos
        this.tiempo_trabajo = tiempo_total * (5 / 18);
        break;
      default:
        break;
    }

    
    
    if (this.usar_dpv){
      this.penetracion_maxima = (2 * this.tiempo_trabajo * this.velocidad_aleteo * this.velocidad_dpv) / (this.velocidad_aleteo + this.velocidad_dpv);
      this.tiempo_ida = this.penetracion_maxima / this.velocidad_dpv;
    } else {
      this.penetracion_maxima = this.tiempo_trabajo * this.velocidad_aleteo;
      this.tiempo_ida = this.penetracion_maxima / this.velocidad_aleteo;
    }








    this.presion_retorno = 0;
    this.resultadoPintado = true;
  }
}
