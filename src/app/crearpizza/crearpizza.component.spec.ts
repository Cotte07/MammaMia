import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpizzaComponent } from './crearpizza.component';

describe('CrearpizzaComponent', () => {
  let component: CrearpizzaComponent;
  let fixture: ComponentFixture<CrearpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearpizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
