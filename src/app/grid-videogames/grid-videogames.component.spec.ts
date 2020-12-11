import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridVideogamesComponent } from './grid-videogames.component';

describe('GridVideogamesComponent', () => {
  let component: GridVideogamesComponent;
  let fixture: ComponentFixture<GridVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridVideogamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
