package com.example.EmployeeSystem.Service;

import com.example.EmployeeSystem.Model.Excel;
import com.example.EmployeeSystem.Repository.ExcelRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExcelService {
     @Autowired
    private final ExcelRepository excelRepository;

    public ExcelService(ExcelRepository excelRepository) {
        this.excelRepository = excelRepository;
    }

    public void importExcel(MultipartFile file) throws IOException {
        List<Excel> employees = new ArrayList<>();
        Workbook workbook = new XSSFWorkbook(file.getInputStream());
        Sheet sheet = workbook.getSheetAt(0);

        // Skip header row, start from row 1
        for (int i = 1; i <= sheet.getLastRowNum(); i++) {
            Row row = sheet.getRow(i);
            if(row == null) continue;

            Excel emp = new Excel();
            emp.setName(getCellValue(row.getCell(0)));
            emp.setEmail(getCellValue(row.getCell(1)));
            emp.setDepartment(getCellValue(row.getCell(2)));

            employees.add(emp);
        }
        workbook.close();
     excelRepository.saveAll(employees);
    }

    private String getCellValue(Cell cell) {
        if (cell == null) return "";
        if (cell.getCellType() == CellType.STRING) {
            return cell.getStringCellValue();
        }
        else if (cell.getCellType() == CellType.NUMERIC) {
            return String.valueOf(cell.getNumericCellValue());
        }
        return "";
    }

    public ByteArrayInputStream exportExcel() throws IOException {
        List<Excel> employees = excelRepository.findAll();

        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Employees");

        // Header row
        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("Name");
        headerRow.createCell(1).setCellValue("Email");
        headerRow.createCell(2).setCellValue("Department");

        int rowIdx = 1;
        for (Excel emp : employees) {
            Row row = sheet.createRow(rowIdx++);
            row.createCell(0).setCellValue(emp.getName());
            row.createCell(1).setCellValue(emp.getEmail());
            row.createCell(2).setCellValue(emp.getDepartment());
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();

        return new ByteArrayInputStream(outputStream.toByteArray());
    }
}
