import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDsrComponent } from './viewdsr.component';

describe('ViewdsrComponent', () => {
  let component: ViewDsrComponent;
  let fixture: ComponentFixture<ViewDsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
