import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGratisComponent } from './test-gratis.component';

describe('TestGratisComponent', () => {
  let component: TestGratisComponent;
  let fixture: ComponentFixture<TestGratisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGratisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
