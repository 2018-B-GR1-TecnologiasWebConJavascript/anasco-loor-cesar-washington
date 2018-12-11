import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaP404Component } from './ruta-p404.component';

describe('RutaP404Component', () => {
  let component: RutaP404Component;
  let fixture: ComponentFixture<RutaP404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaP404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaP404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
