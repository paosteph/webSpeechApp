import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesANivelComponent } from './frases-a-nivel.component';

describe('FrasesANivelComponent', () => {
  let component: FrasesANivelComponent;
  let fixture: ComponentFixture<FrasesANivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrasesANivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrasesANivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
