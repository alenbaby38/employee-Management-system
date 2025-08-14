import { Component, OnInit } from '@angular/core';
import { FieldListService, GroupingBarService, IDataOptions, IDataSet, PivotViewModule } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-pivotex',
  imports: [PivotViewModule],
  providers:[FieldListService,GroupingBarService],
  templateUrl: './pivotex.component.html',
  styleUrl: './pivotex.component.css'
})
export class PivotexComponent implements OnInit{
public pivotData: IDataSet[] | undefined;
public dataSourceSettings : IDataOptions | undefined;

ngOnInit(): void {
  this.pivotData = [
    { Country: 'USA', Year: '2023', Product: 'Laptop', Sales: 12000, Quantity: 10 },
    { Country: 'USA', Year: '2024', Product: 'Laptop', Sales: 15000, Quantity: 12 },
    { Country: 'USA', Year: '2023', Product: 'Mobile', Sales: 10000, Quantity: 20 },
    { Country: 'India', Year: '2023', Product: 'Laptop', Sales: 8000, Quantity: 5 },
    { Country: 'India', Year: '2024', Product: 'Mobile', Sales: 9000, Quantity: 18 },
    { Country: 'Germany', Year: '2023', Product: 'Laptop', Sales: 7000, Quantity: 7 },
    { Country: 'Germany', Year: '2024', Product: 'Mobile', Sales: 6000, Quantity: 15 },
  ];
  this.dataSourceSettings={
    dataSource: this.pivotData,
    columns:[{name:"Year"}],
    rows: [{name: 'Country'}],
    values:[{name:'Sales'},{name:'Quantity'},{name:'Product'}],
    formatSettings:[{name:'Sales' , format:'c0'}]
  }
}
}
