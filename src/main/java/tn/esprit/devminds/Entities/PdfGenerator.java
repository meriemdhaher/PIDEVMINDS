package tn.esprit.devminds.Entities;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.ByteArrayOutputStream;

public class PdfGenerator {
    public static byte[] generateDemandeDeStagePdf(Etudiant etudiant) {
        try {
            Document document = new Document();
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            PdfWriter.getInstance(document, byteArrayOutputStream);

            document.open();
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16, BaseColor.BLACK);
            Paragraph title = new Paragraph("Demande de Stage", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);

            // Ajoutez les informations de l'étudiant
            Font infoFont = FontFactory.getFont(FontFactory.HELVETICA, 12, BaseColor.BLACK);
            addEmptyLine(document, 2); // Ajoutez quelques lignes vides

            document.add(new Paragraph("Nom: " + etudiant.getNom(), infoFont));
            document.add(new Paragraph("Prenom: " + etudiant.getPrenom(), infoFont));
            document.add(new Paragraph("Cin: " + etudiant.getCin(), infoFont));
            document.add(new Paragraph("Numero: " + etudiant.getNumero(), infoFont));

            document.close();

            return byteArrayOutputStream.toByteArray();
        } catch (DocumentException e) {
            e.printStackTrace();
            return null;
        }
    }
    private static void addEmptyLine(Document document, int number) throws DocumentException {
        for (int i = 0; i < number; i++) {
            document.add(Chunk.NEWLINE);
        }
    }
}

