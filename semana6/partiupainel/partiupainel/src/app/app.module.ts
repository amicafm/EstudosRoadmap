import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MediadorComponent } from './mediador/mediador.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar/cadastrar.funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar/listar.funcionario.component';
import { EditarFuncionarioComponent } from './funcionario/editar/editar.funcionario.component';
import { CadastrarCardapioComponent } from './cardapio/cadastrar/cadastrar.cardapio.component';
import { ListarCardapioComponent } from './cardapio/listar/listar.cardapio.component';
import { EditarCardapioComponent } from './cardapio/editar/editar.cardapio.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './widgets/home/home.component';
import { ParceriasComponent } from './widgets/parcerias/parcerias.component';
import { SobreComponent } from './widgets/sobre/sobre.component';
import { RelatorioComponent } from './relatorio/relatorio.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'painel', component: MediadorComponent },
  { path: 'funcionarios', component: ListarFuncionarioComponent },
  { path: 'cadastroFuncionarios', component: CadastrarFuncionarioComponent },
  { path: 'editaFuncionario', component: EditarFuncionarioComponent },
  { path: 'listarFuncionarios', component: ListarFuncionarioComponent },
  { path: 'cadastroCardapio', component: CadastrarCardapioComponent },
  { path: 'editaCardapio', component: EditarCardapioComponent },
  { path: 'listarCardapio', component: ListarCardapioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'parcerias', component: ParceriasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MediadorComponent,
    CadastrarFuncionarioComponent,
    ListarFuncionarioComponent,
    EditarFuncionarioComponent,
    CadastrarCardapioComponent,
    ListarCardapioComponent,
    EditarCardapioComponent,
    HomeComponent,
    ParceriasComponent,
    SobreComponent,
    RelatorioComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent], 
  exports: []
})
export class AppModule { }
