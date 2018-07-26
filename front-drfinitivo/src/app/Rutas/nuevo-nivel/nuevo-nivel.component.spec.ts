import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoNivelComponent } from './nuevo-nivel.component';

describe('NuevoNivelComponent', () => {
  let component: NuevoNivelComponent;
  let fixture: ComponentFixture<NuevoNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
