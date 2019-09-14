import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cadastrar-cardapio',
  templateUrl: './cadastrar.cardapio.component.html',
  styleUrls: ['./cadastrar.cardapio.component.css']
})
export class CadastrarCardapioComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        categoria: ['', Validators.required],
        valor: ['', Validators.required]
    });
  }

  adicionarItem(item: Item){
    //this.cardapioService.adicionarItem(item);
  }
}
