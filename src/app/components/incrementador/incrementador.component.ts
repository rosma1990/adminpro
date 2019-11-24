import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef 
  @Input('nombre') leyenda: string = 'Leyenda';   //variables que vienen de fuera del componente
  @Input() progreso: number = 50;    //variables que vienen de fuera del componente


  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  
  
  constructor() {
  }
  
  ngOnInit() {
    // console.log('Leyenda :', this.leyenda);
    // console.log('progreso :', this.progreso);
  }
  
  onChanges( newValue: number){
    
    // console.log(newValue);
    // let elementoHtml: any= document.getElementsByName('progreso');
    // console.log(elementoHtml);
    console.log( this.txtProgress);
    if ( newValue >= 100 ){
      this.progreso = 100;
    } else if ( newValue <= 0){
      this.progreso =0;
    } else {
      this.progreso  = newValue;
    }
    // elementoHtml.value =  (this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();

  }
  
  cambiarValor( valor: number){
    
    if (this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0  && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
  

}
