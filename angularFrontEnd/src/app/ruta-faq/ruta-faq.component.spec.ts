import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFAQComponent } from './ruta-faq.component';

describe('RutaFAQComponent', () => {
  let component: RutaFAQComponent;
  let fixture: ComponentFixture<RutaFAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaFAQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
