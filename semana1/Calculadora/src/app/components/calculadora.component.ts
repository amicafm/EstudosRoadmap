import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  /*PRIVATE NÃO DEIXA OS OUTROS COMPONENTES TEREM ACESSO A ELES ENTAO SÓ SÃO USADOS AQUI*/
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar(): void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void{
    if(this.operacao === null){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string{
    //caso tenha só 0 ou null, reinicia o valor
    if(numAtual === '0' || numAtual === null){
      numAtual = '';
    }

    //se o primeiro digito for . coloca o 0 antes
    if(numConcat === '.' && numAtual === ''){
      return '0.';
    }

    //caso . digitado e já contenha . , ignoro
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void{
    //define operação caso já não exista uma
    if(this.operacao === null){
      this.operacao = operacao;
      return;
    }

    //caso já exista uma operação, efetua o calculo
    if(this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1), 
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void{
    // se pressionar o botão de = e não tiver num2, n faz o calculo
    if(this.numero2 === null){
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1), 
      parseFloat(this.numero2),
      this.operacao);
  }

  //mostra o resultado na tela
  get display(): string{
    if(this.resultado !== null){
      return this.resultado.toString();
    }
    if(this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }

}
