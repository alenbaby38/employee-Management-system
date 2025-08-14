import { Component, ViewChild } from '@angular/core';
import { row } from '@syncfusion/ej2-angular-grids';
import { CellStyleModel, deleteImage, getCell, getRangeIndexes, Spreadsheet, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-spreadsheet',
  imports: [SpreadsheetAllModule],
  templateUrl: './spreadsheet.component.html',
  styleUrl: './spreadsheet.component.css'
})
export class SpreadsheetComponent {
  public image =[{src:"https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b026f63d9f019_Online%20store%20shopping.jpg",height:180,width:127}]
 format:boolean =true ;
  @ViewChild('Spreadsheetadd') 
  public ssjObj!: Spreadsheet;
public deleteImage() {
 let rangeIndex = getRangeIndexes("F1")
 let cell = getCell(rangeIndex[0],rangeIndex[1],(this.ssjObj.getActiveSheet() ))
  if (cell.image) {
    this.ssjObj.deleteImage(cell.image[0].id as string); 
  }
}
public addImage(){
  this.ssjObj.insertImage(this.image,"F1:G1")
}

  validateSheet(){
    this.ssjObj.addDataValidation({type:'Decimal',operator:'GreaterThan',value1:'11'});
    this.ssjObj.addInvalidHighlight();

  }
  currencyFormat(){
    if(this.format){
    this.ssjObj.numberFormat("$#,##0.00",'D2:D9');
    this.format = false;
    }
    else{
      this.ssjObj.numberFormat('0.00','D2:D8');
      this.format = true;
    }

  }
  removeValidateSheet(){
   this.ssjObj.removeDataValidation();
   this.ssjObj.removeInvalidHighlight();
  }

  savefile(){
    this.ssjObj.save({
      url:"https://services.syncfusion.com/angular/production/api/spreadsheet/save",
      fileName:"Spreadsheet",
       saveType:"Xlsx"      
    });
  }
  saveSheet(){
    this.ssjObj.endEdit();
  }
onCelledit(event:any){
  if(event.address.includes("E")){
    event.cancel=true;
  }

}

    closeSheet(){
    this.ssjObj.closeEdit();
  }
  addSheet() {
this.ssjObj?.insertSheet();
}
  EditSheet() {
this.ssjObj?.startEdit();
}
  
  duplicateSheet() {
this.ssjObj?.duplicateSheet();
}
MoveSheet() {
this.ssjObj?.moveSheet(0,[1]);
}
deleteSheet() {
this.ssjObj?.delete();
}
oncreate(){
  this.ssjObj?.insertSheet([{
    index:1,
    name:'new sheet',
    ranges:[{dataSource:this.data}],
    columns:[{width:100},{width:100},{width:100},{width:100},{width:100},]
  
  }])
  this.ssjObj?.cellFormat({fontWeight:'bold'},'A1:E1')
  this.ssjObj.cellFormat({backgroundColor:'skyblue'},'A1:E1')
  this.ssjObj.merge('F1:F9')
  this.ssjObj.merge('F1:G1')

}
 // spreadsheetData = [{
   // name: 'Sales and product details',
   // ranges: [{
     // dataSource: [
       // { Country: 'USA', Year: '2023', Product: 'Laptop', Sales: 12000, Quantity: 10 },
       // { Country: 'USA', Year: '2024', Product: 'Laptop', Sales: 15000, Quantity: 12 },
       // { Country: 'USA', Year: '2023', Product: 'Mobile', Sales: 10000, Quantity: 20 },
       // { Country: 'India', Year: '2023', Product: 'Laptop', Sales: 8000, Quantity: 5 },
      //  { Country: 'India', Year: '2024', Product: 'Mobile', Sales: 9000, Quantity: 18 },
       // { Country: 'Germany', Year: '2023', Product: 'Laptop', Sales: 7000, Quantity: 7 },
       // { Country: 'Germany', Year: '2024', Product: 'Mobile', Sales: 6000, Quantity: 15 }
     // ]
   // }],
  //  columns: [{ width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }],
 // }];
 public cellstyle:CellStyleModel = {fontWeight:'bold',color:'Red',textAlign:'center'};
public data :object[]=[{ Country: 'USA', Year: '2023', Product: 'Laptop', Sales: 12000, Quantity: 10 },
        { Country: 'USA', Year: '2024', Product: 'Laptop', Sales: 15000, Quantity: 12 },
        { Country: 'USA', Year: '2023', Product: 'Mobile', Sales: 10000, Quantity: 20 },
        { Country: 'India', Year: '2023', Product: 'Laptop', Sales: 8000, Quantity: 5 },
        { Country: 'India', Year: '2024', Product: 'Mobile', Sales: 9000, Quantity: 18 },
        { Country: 'Germany', Year: '2023', Product: 'Laptop', Sales: 7000, Quantity: 7 },
        { Country: 'Germany', Year: '2024', Product: 'Mobile', Sales: 6000, Quantity: 15 }

]

}
