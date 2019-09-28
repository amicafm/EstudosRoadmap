import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar.funcionario.component.html',
  styleUrls: ['./editar.funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        cfp: ['', Validators.required],
        usuario: ['', Validators.required],
        senha: ['', Validators.required],
        genero: ['', Validators.required],
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        nascimento: ['', Validators.required]
    });
  }

  editarFuncionario(funcionario: Funcionario){
    //this.funcionarioService.atualizaFuncionario(funcionario);
  }

}
