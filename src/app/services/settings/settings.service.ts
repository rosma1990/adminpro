import { Injectable, Inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';


// import { Ajustes } from '../interface.ajustes';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: AjustesSettings ={
  temaUrl :'assets/css/colors/default.css',
  tema: 'default'
}
  
public tema: string = 'default';
public temaUrl: string;

constructor(@Inject(DOCUMENT) private _document){

  // console.log('constructor del servicio');
  this.cargarAjustes();
   }

guardarAjustes () {
    // console.log('Guardado en el local strorage');
    localStorage.setItem('ajustes' , JSON.stringify(this.ajustes));
  }

cargarAjustes(){
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));

      // console.log('Cargando configuracion del localStorage ');
      // console.log('tema' , this.ajustes.tema);
      // console.log('temaURL' , this.ajustes.temaUrl);
      this.aplicarTema(this.ajustes.tema);
    } else {
      // console.log('Usando valores por defecto ');
      this.aplicarTema(this.ajustes.tema);

    }
  }


  aplicarTema(tema: string){
    // this.aplicarCheck( link )
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url );
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();


  }
}

interface AjustesSettings {
  temaUrl: string;
  tema: string;
}

interface Cliente {
  nombre: String;
  cif: String;
  direccion: String;
}
