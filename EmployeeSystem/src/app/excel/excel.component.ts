import { Component } from '@angular/core';
import { ExcelService } from '../excel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
  imports:[CommonModule,FormsModule]
})
export class ExcelComponent {
  selectedFile: File | null = null;
  message: string | null = null;
  errorMessage: string | null = null;
  loadingImport = false;
  loadingExport = false;

  constructor(private excelService: ExcelService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.message = null;
    this.errorMessage = null;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  importFile(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a file first.';
      return;
    }

    this.loadingImport = true;
    this.message = null;
    this.errorMessage = null;

    this.excelService.importExcel(this.selectedFile).subscribe({
      next: (res) => {
        this.message = res;
        this.loadingImport = false;
      },
      error: (err) => {
        this.errorMessage = err.error || 'Failed to import file.';
        this.loadingImport = false;
      }
    });
  }

  exportFile(): void {
    this.loadingExport = true;
    this.message = null;
    this.errorMessage = null;

    this.excelService.exportExcel().subscribe({
      next: (blob) => {
        const downloadURL = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadURL;
        link.download = 'employees.xlsx';
        link.click();
        window.URL.revokeObjectURL(downloadURL);
        this.loadingExport = false;
        this.message = 'File downloaded successfully.';
      },
      error: (err) => {
        this.errorMessage = 'Failed to download file.';
        this.loadingExport = false;
      }
    });
  }
}
