import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar.funcionario.component.html',
  styleUrls: ['./listar.funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  public listarFuncionarios: Funcionario[];

  constructor(private funcService: FuncionarioService) { }

  ngOnInit() {  
    this.funcService.listarFuncionarios().subscribe(data => {
      this.listarFuncionarios = data as Funcionario[]
    });
  }

  excluirFuncionario(id: number){
    //this.funcionarioService.deletarItemById(id);
  }

}
