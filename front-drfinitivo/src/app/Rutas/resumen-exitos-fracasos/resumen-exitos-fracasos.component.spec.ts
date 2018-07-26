import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenExitosFracasosComponent } from './resumen-exitos-fracasos.component';

describe('ResumenExitosFracasosComponent', () => {
  let component: ResumenExitosFracasosComponent;
  let fixture: ComponentFixture<ResumenExitosFracasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenExitosFracasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenExitosFracasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
