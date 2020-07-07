import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisArchivosComponent } from './mis-archivos.component';

describe('MisArchivosComponent', () => {
  let component: MisArchivosComponent;
  let fixture: ComponentFixture<MisArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
