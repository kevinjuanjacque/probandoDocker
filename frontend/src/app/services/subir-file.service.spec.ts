import { TestBed } from '@angular/core/testing';

import { SubirFileService } from './subir-file.service';

describe('SubirFileService', () => {
  let service: SubirFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
