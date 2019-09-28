import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncionarioComponent } from './cadastrar.funcionario.component';

describe('FuncionarioComponent', () => {
  let component: CadastrarFuncionarioComponent;
  let fixture: ComponentFixture<CadastrarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
