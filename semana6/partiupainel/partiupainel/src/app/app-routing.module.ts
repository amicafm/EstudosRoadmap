import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediadorComponent } from './mediador/mediador.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar/cadastrar.funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar/listar.funcionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.funcionario.component';
import { CadastrarCardapioComponent } from './cardapio/cadastrar/cadastrar.cardapio.component';
import { EditarCardapioComponent } from './cardapio/editar/editar.cardapio.component';
import { ListarCardapioComponent } from './cardapio/listar/listar.cardapio.component';
import { HomeComponent } from './widgets/home/home.component';
import { ParceriasComponent } from './widgets/parcerias/parcerias.component';
import { SobreComponent } from './widgets/sobre/sobre.component';
import { RelatorioComponent } from './relatorio/relatorio.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'mediador', component: MediadorComponent },
  { path: 'cadastrarfuncionario', component: CadastrarFuncionarioComponent },
  { path: 'listarfuncionario', component: ListarFuncionarioComponent },
  { path: 'editarfuncionario', component: EditarFuncionarioComponent },
  { path: 'cadastrarcardapio', component: CadastrarCardapioComponent },
  { path: 'editarcardapio', component: EditarCardapioComponent },
  { path: 'listarcardapio', component: ListarCardapioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'parcerias', component: ParceriasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
