import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonazoComponent } from './botonazo.component';

describe('BotonazoComponent', () => {
  let component: BotonazoComponent;
  let fixture: ComponentFixture<BotonazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
