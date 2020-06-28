import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArbitreComponent } from './update-arbitre.component';

describe('UpdateArbitreComponent', () => {
  let component: UpdateArbitreComponent;
  let fixture: ComponentFixture<UpdateArbitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArbitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
