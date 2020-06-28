import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatchesComponent } from './update-matches.component';

describe('UpdateMatchesComponent', () => {
  let component: UpdateMatchesComponent;
  let fixture: ComponentFixture<UpdateMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
