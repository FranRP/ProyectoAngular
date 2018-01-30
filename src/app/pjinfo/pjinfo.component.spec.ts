import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjinfoComponent } from './pjinfo.component';

describe('PjinfoComponent', () => {
  let component: PjinfoComponent;
  let fixture: ComponentFixture<PjinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
