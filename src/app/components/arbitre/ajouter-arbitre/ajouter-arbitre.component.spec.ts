import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArbitreComponent } from './ajouter-arbitre.component';

describe('AjouterArbitreComponent', () => {
  let component: AjouterArbitreComponent;
  let fixture: ComponentFixture<AjouterArbitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterArbitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterArbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
