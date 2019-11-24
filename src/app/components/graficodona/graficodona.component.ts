import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {


  // @Input() data: any = 'Leyenda';   //variables que vienen de fuera del componente
  // @Input() labels: any = 50;    //variables que vienen de fuera del componente
  // @Input() chartType: any = 50;    //variables que vienen de fuera del componente


  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';
  @Input('ChartLeyenda') ChartLeyenda: string = '';

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
    // console.log(this.labels);
    // console.log(this.chartType);
    
  }

}
