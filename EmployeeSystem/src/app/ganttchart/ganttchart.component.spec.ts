import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantChartComponent } from './ganttchart.component';

describe('GanttchartComponent', () => {
  let component: GantChartComponent;
  let fixture: ComponentFixture<GantChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GantChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GantChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
