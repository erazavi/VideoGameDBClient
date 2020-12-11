import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProducersComponent } from './grid-publishers.component';

describe('GridProducersComponent', () => {
  let component: GridProducersComponent;
  let fixture: ComponentFixture<GridProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridProducersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
