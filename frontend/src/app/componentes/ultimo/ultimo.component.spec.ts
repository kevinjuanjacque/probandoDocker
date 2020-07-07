import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoComponent } from './ultimo.component';

describe('UltimoComponent', () => {
  let component: UltimoComponent;
  let fixture: ComponentFixture<UltimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
