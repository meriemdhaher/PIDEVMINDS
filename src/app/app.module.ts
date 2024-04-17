import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatIconModule } from '@angular/material/icon';
// import {DataTablesModule} from 'angular-datatables'; 
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { UserprofilComponent } from './pages/userprofil/userprofil.component';
import { EtudiantListComponent } from './pages/etudiant/etudiant-list/etudiant-list.component';
import { EtudiantNewComponent } from './pages/etudiant/etudiant-new/etudiant-new.component';
import { EtudiantUpdateComponent } from './pages/etudiant/etudiant-update/etudiant-update.component';
import { TimelineComponent } from './timeline-component/timeline-component.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConventionComponent } from './convention/convention.component';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import { ConventionFormComponent } from './convention-form/convention-form.component';
import { JournalStageComponent } from './journal-stage/journal-stage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AsideComponent,
    DashboardComponent,
    CandidatureComponent,
    CommunicationComponent,
    EntrepriseComponent,
    EvenementComponent,
    UserprofilComponent,
    EtudiantListComponent,
    EtudiantNewComponent,
    EtudiantUpdateComponent,
    TimelineComponent,
    DemandeStageComponent,
    ConventionComponent,
    ConfirmationdialogComponent,
    ConventionFormComponent,
    JournalStageComponent
   
    
    
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule, BrowserAnimationsModule, 
    MatSnackBarModule,
    MatStepperModule,
    MatIconModule
    
    // DataTablesModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
