import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFraseComponent } from './nueva-frase.component';

describe('NuevaFraseComponent', () => {
  let component: NuevaFraseComponent;
  let fixture: ComponentFixture<NuevaFraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaFraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
