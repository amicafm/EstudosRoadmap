import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  chart = [];
  meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  qtd = ['12', '22', '19', '30', '43', '66', '17', '55', '90', '93'];
  itens = ['Batata frita', 'Heinekein lata', 'Coxinha', 'Coca cola lata'];

  constructor() { }

  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true
  };  
  public barChartLabels2 = this.itens;
  public barChartType2 = 'pie';
  public barChartLegend2 = true;  
  public barChartData2 = [
    {data: this.qtd, label: 'itens mais pedidos do cardápio'}
  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  
  public barChartLabels = this.meses;
  public barChartType = 'line';
  public barChartLegend = true;  
  public barChartData = [
    {data: this.qtd, label: 'pessoinhas utilizando o Partiu'}
  ];

  ngOnInit() {
     
  }

}
