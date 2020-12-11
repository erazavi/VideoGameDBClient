import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPublishersWithGamesComponent } from './grid-publishers-with-games.component';

describe('GridPublishersWithGamesComponent', () => {
  let component: GridPublishersWithGamesComponent;
  let fixture: ComponentFixture<GridPublishersWithGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPublishersWithGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPublishersWithGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
