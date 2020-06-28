import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitresComponent } from './arbitres.component';

describe('ArbitresComponent', () => {
  let component: ArbitresComponent;
  let fixture: ComponentFixture<ArbitresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
