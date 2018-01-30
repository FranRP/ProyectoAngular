import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraEnlacesComponent } from './cabecera-enlaces.component';

describe('CabeceraEnlacesComponent', () => {
  let component: CabeceraEnlacesComponent;
  let fixture: ComponentFixture<CabeceraEnlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraEnlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
