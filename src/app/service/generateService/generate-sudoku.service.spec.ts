import { TestBed, inject } from '@angular/core/testing';

import { GenerateSudokuService } from './generate-sudoku.service';

describe('GenerateSudokuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateSudokuService]
    });
  });

  it('should be created', inject([GenerateSudokuService], (service: GenerateSudokuService) => {
    expect(service).toBeTruthy();
  }));
});
