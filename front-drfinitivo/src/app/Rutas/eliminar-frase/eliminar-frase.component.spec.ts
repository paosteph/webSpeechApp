import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFraseComponent } from './eliminar-frase.component';

describe('EliminarFraseComponent', () => {
  let component: EliminarFraseComponent;
  let fixture: ComponentFixture<EliminarFraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarFraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
