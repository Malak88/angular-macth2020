import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitreDetailsComponent } from './arbitre-details.component';

describe('ArbitreDetailsComponent', () => {
  let component: ArbitreDetailsComponent;
  let fixture: ComponentFixture<ArbitreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
