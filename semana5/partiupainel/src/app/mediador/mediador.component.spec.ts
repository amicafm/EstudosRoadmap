import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediadorComponent } from './mediador.component';

describe('MediadorComponent', () => {
  let component: MediadorComponent;
  let fixture: ComponentFixture<MediadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
