/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JuegoService } from './juego.service';

describe('Service: Juego', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuegoService]
    });
  });

  it('should ...', inject([JuegoService], (service: JuegoService) => {
    expect(service).toBeTruthy();
  }));
});
