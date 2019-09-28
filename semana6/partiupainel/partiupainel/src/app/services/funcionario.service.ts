import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  static readonly url = "http://localhost:8080/partiu/"

  constructor(private http: HttpClient, private funcService: FuncionarioService) { }

  createFuncionario(tipo:string, cpf:string, nome:string, nasc:string, email: string, ddd:string, telefone:string, genero:string, senha: string){
    console.log("createUsuario?tipo="+tipo+"&cpf="+cpf+"&dta_nascimento="+nasc+"&email="+email+"&ddd="+ddd+"&telefone="+telefone+"&genero="+genero+"&senha="+senha)
    // return this.http.get(FuncionarioService.url+"createUsuario?tipo="+tipo+"&cpf="+cpf+"&dta_nascimento="+nasc+"&email="+email+"&ddd="+ddd+"&telefone="+telefone+"&genero="+genero+"&senha="+senha);
    return null;
  }

  listarFuncionarios(){
    let cnpj = JSON.parse(localStorage.getItem('cnpj'))["cnpj"]
    return this.http.get(FuncionarioService.url+"listarFuncionarios?cnpj="+cnpj)
  }
}
