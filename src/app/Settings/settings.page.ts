import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';
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

  sac: number;
  velocidad_dpv: number;
  velocidad_aleteo: number;

  constructor(public formBuilder: FormBuilder, private router: Router, private settingsService: SettingsService) {
    this.init();
  }

  async init(){
    this.sac = await this.settingsService.get('sac') || 20;
    this.velocidad_aleteo = await this.settingsService.get('velocidad_aleteo') || 10;
    this.velocidad_dpv = await this.settingsService.get('velocidad_dpv') || 30;
  }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      sac: [this.sac, [Validators.required]],
      velocidad_aleteo: [this.velocidad_aleteo, [Validators.required]],
      velocidad_dpv: [this.velocidad_dpv, [Validators.required]],
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  guardar() {
    console.log("Guardando settings:", this.settingsService)
    this.settingsService.set("sac", this.sac)
    this.settingsService.set("velocidad_dpv", this.velocidad_dpv)
    this.settingsService.set("velocidad_aleteo", this.velocidad_aleteo);

    this.router.navigate(['/']);
  }


}
