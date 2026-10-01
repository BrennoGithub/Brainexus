import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetalhes } from './cursos-detalhes';

describe('CursosDetalhes', () => {
  let component: CursosDetalhes;
  let fixture: ComponentFixture<CursosDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(CursosDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
