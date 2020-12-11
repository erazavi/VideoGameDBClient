import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameFormComponent } from './videogame-form.component';

describe('VideogameFormComponent', () => {
  let component: VideogameFormComponent;
  let fixture: ComponentFixture<VideogameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
