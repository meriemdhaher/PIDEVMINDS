package tn.esprit.devminds.Entities;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.ByteArrayOutputStream;

public class PdfGenerator {
    public static byte[] generateDemandeDeStagePdf(Etudiant etudiant) {
        try {
            Document document = new Document();
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            PdfWriter.getInstance(document, byteArrayOutputStream);

            document.open();
            document.add(new Paragraph("Demande de Stage"));
            document.add(new Paragraph("Nom: " + etudiant.getNom()));
            document.add(new Paragraph("Prenom: " + etudiant.getPrenom()));
            document.add(new Paragraph("Cin: " + etudiant.getCin()));
            document.add(new Paragraph("Numero: " + etudiant.getNumero()));

            // Ajoutez d'autres informations spécifiques à la demande de stage ici
            // Par exemple, document.add(new Paragraph("Champ: " + etudiant.getChamp()));

            document.close();

            return byteArrayOutputStream.toByteArray();
        } catch (DocumentException e) {
            e.printStackTrace();
            return null;
        }
    }
}
