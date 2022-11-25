import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _storage: Storage | null = null;
 

  constructor(private storage: Storage) {
    
  }


  async init(){
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async get(key: string) {
    this._storage = await this.storage.create();
    return await this._storage?.get(key);
  }

}
