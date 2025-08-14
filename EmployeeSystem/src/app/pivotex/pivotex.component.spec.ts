import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotexComponent } from './pivotex.component';

describe('PivotexComponent', () => {
  let component: PivotexComponent;
  let fixture: ComponentFixture<PivotexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PivotexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivotexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
