import { TestBed } from '@angular/core/testing';

import { MenudataService } from './menudata.service';

describe('MenudataService', () => {
  let service: MenudataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenudataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
