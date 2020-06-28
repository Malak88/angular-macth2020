import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMatchesComponent } from './ajouter-matches.component';

describe('AjouterMatchesComponent', () => {
  let component: AjouterMatchesComponent;
  let fixture: ComponentFixture<AjouterMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
