import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MammaMiaComponent } from './mamma-mia.component';

describe('MammaMiaComponent', () => {
  let component: MammaMiaComponent;
  let fixture: ComponentFixture<MammaMiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MammaMiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MammaMiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
