import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { SettingsService } from '../../services/service.index';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(  @Inject(DOCUMENT) private _document,
                public _ajustes: SettingsService) { }

  ngOnInit() {
  }


  cambiarColor( tema: string, link: any ){
    console.log('Tema a aplicar 1: ', tema);
    // console.log('link :', link);
    this.aplicarCheck( link );
 
    this._ajustes.aplicarTema(tema);


  }

  aplicarCheck( link: any ){
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

}
