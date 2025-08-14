package com.example.EmployeeSystem.Service;


import com.example.EmployeeSystem.Model.Project;
import com.example.EmployeeSystem.Model.Task;
import com.example.EmployeeSystem.Model.User;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfTable;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class PdfGeneration {
    public ByteArrayInputStream generateProjectsPdf(java.util.List<Project> projects) {

        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
try{
    PdfWriter.getInstance(document, out);
    document.open();
    Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18);
    Paragraph title = new Paragraph("List of Projects", titleFont);
    title.setAlignment(Element.ALIGN_CENTER);
    document.add(title);
    document.add(Chunk.NEWLINE);

    for (Project project : projects) {
        Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);


        Paragraph projectName = new Paragraph("Project: " + project.getName(), headFont);
        document.add(projectName);


        document.add(new Paragraph("Description: " + project.getDescription()));
        document.add(new Paragraph("Assigned To: " + String.join(", ", project.getAssignedTo())));
        document.add(new Paragraph(" "));
        // Task Table
        PdfPTable table = getPdfPTable(project, headFont);

        document.add(table);
        document.add(Chunk.NEWLINE);
    }

    document.close();
} catch (DocumentException ex) {
    ex.printStackTrace();
}

        return new ByteArrayInputStream(out.toByteArray());
    }

    private static PdfPTable getPdfPTable(Project project, Font headFont) {
        PdfPTable table = new PdfPTable(2);
        table.setWidthPercentage(100);
        table.setWidths(new int[]{1, 3});

        PdfPCell hcell;
        hcell = new PdfPCell(new Phrase("Task ID", headFont));
        table.addCell(hcell);

        hcell = new PdfPCell(new Phrase("Task Name", headFont));
        table.addCell(hcell);

        if (project.getTasks() != null) {
            for (Task task : project.getTasks()) {
                table.addCell(task.getId());
                table.addCell(task.getStatus());
            }
        }
        return table;
    }

    public ByteArrayInputStream generateUsersPdf(List<User> users) {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try{
            PdfWriter.getInstance(document, out);
            document.open();
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18);
            Paragraph title = new Paragraph("List of Users", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(Chunk.NEWLINE);

            for (User user : users) {
                Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);


                Paragraph projectName = new Paragraph("USER: " + user.getUsername(), headFont);
                document.add(projectName);


                document.add(new Paragraph("Email: " + user.getEmail()));
                document.add(new Paragraph("Role: " +user.getRole()));


            }

            document.close();
        } catch (DocumentException ex) {
            ex.printStackTrace();
        }

        return new ByteArrayInputStream(out.toByteArray());
    }

}

