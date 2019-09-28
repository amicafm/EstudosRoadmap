import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar.cardapio.component.html',
  styleUrls: ['./editar.cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {
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

  editarItem(item: Item){
    //this.cardapioService.atualizarItem(item);
  }

}
