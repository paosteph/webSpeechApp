import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarNivelComponent } from './seleccionar-nivel.component';

describe('SeleccionarNivelComponent', () => {
  let component: SeleccionarNivelComponent;
  let fixture: ComponentFixture<SeleccionarNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
