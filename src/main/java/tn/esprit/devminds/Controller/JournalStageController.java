package tn.esprit.devminds.Controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import tn.esprit.devminds.Entities.Etudiant;
import tn.esprit.devminds.Entities.JournalStage;
import tn.esprit.devminds.Entities.JournalStageResponse;
import tn.esprit.devminds.Repository.JournalStageRepository;
import tn.esprit.devminds.Service.JournalStageService;

import java.io.ByteArrayOutputStream;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/journal-stage")
public class JournalStageController {

    @Autowired
    private JournalStageService journalStageService;

    @PostMapping("/generate/{cin}")
    public ResponseEntity<byte[]> generateJournalStageDocument(@PathVariable Long cin) {
        try {
            byte[] document = journalStageService.generateJournalStageDocument(cin);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(new MediaType("application", "msword"));
            headers.setContentDispositionFormData("filename", "journal-stage.docx");

            return new ResponseEntity<>(document, headers, HttpStatus.OK);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}


