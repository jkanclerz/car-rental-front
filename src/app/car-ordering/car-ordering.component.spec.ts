import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOrderingComponent } from './car-ordering.component';

describe('CarOrderingComponent', () => {
  let component: CarOrderingComponent;
  let fixture: ComponentFixture<CarOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
