import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit{
  @ViewChild(IonModal) modal: IonModal;

  ionicForm: FormGroup;
  isSubmitted = false;

  usar_dpv = false;
  rmv: number;
  velocidad_dpv: number;
  velocidad_aleteo: number;

  constructor(public formBuilder: FormBuilder, private router: Router, public settings: SettingsService) {
    this.init();
  }

  async init(){
    this.rmv = await this.settings.get('rmv') || 20;
    this.velocidad_aleteo = await this.settings.get('velocidad_aleteo') || 10;
    this.velocidad_dpv = await this.settings.get('velocidad_dpv') || 30;
    this.usar_dpv = await this.settings.get('usar_dpv') || false;
  }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      rmv: [this.rmv, [Validators.required]],
      velocidad_aleteo: [this.velocidad_aleteo, [Validators.required]],
      velocidad_dpv: [this.velocidad_dpv, [Validators.required]],
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  guardar() {
    console.log("Guardando settings:", this.settings)
    this.settings.set("rmv", this.rmv)
    this.settings.set("usar_dpv", this.usar_dpv)
    this.settings.set("velocidad_dpv", this.velocidad_dpv)
    this.settings.set("velocidad_aleteo", this.velocidad_aleteo);

    this.router.navigate(['gas/sugerir']);
  }


}
