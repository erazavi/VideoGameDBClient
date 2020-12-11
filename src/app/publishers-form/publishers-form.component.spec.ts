import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersFormComponent } from './publishers-form.component';

describe('PublishersFormComponent', () => {
  let component: PublishersFormComponent;
  let fixture: ComponentFixture<PublishersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
