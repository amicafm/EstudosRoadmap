import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static readonly url = "http://localhost:8080/partiu/"

  constructor(private http: HttpClient) { }

  login(email: string, senha: string){
    return this.http.get(LoginService.url+"login?email="+email+"&senha="+senha);
  }

  getCnpj(id:number){
    return this.http.get(LoginService.url+"getRestauranteByIdGarcom?idGarcom="+id)
  }
}
