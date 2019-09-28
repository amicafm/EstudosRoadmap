import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar.funcionario.component.html',
  styleUrls: ['./cadastrar.funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private funcService: FuncionarioService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formGroup = this.formBuilder.group({
        
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
        usuario: ['', Validators.required],
        genero: ['', Validators.required],
        senha: ['', Validators.required]
    });
  }

  adicionarFuncionario(){
      let tipo = "garcom"
      let cpf = this.formGroup.get("cpf").value;
      let nome = this.formGroup.get("nome").value;
      let nasc = this.formGroup.get("nascimento").value;
      let email = this.formGroup.get("email").value;
      let telUnformated = this.formGroup.get("telefone").value;
      let ddd = telUnformated.substring(0, 2);
      let telefone = telUnformated.substring(2);
      let genero = this.formGroup.get("genero").value;
      let senha = "123";
      // let usuario = this.formGroup.get("cpf").value;
      
      this.funcService.createFuncionario(tipo, cpf, nome, nasc, email, ddd, telefone, genero, senha).subscribe((data)=>{
          console.log("Funcionário Criado")
          this.router.navigate(['/listarfuncionario/']);
          
      })
      
    
  }

}
