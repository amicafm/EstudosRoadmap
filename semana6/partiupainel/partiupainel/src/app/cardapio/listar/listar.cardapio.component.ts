import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-listar-cardapio',
  templateUrl: './listar.cardapio.component.html',
  styleUrls: ['./listar.cardapio.component.css']
})
export class ListarCardapioComponent implements OnInit {
  public listarItens: Item[];

  constructor() { }

  ngOnInit() {
    //this.cardapioService.listarItens().subscribe(itens => {this.listarItens = itens;});
  }

  excluirItem(id: number){
    //this.cardapioService.deletarItemById(id);
  }

}
