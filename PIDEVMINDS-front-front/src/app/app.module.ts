import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
// import {DataTablesModule} from 'angular-datatables'; 
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { NewCategoryComponent } from './pages/category/new-category/new-category.component';
import { CandidatureComponent } from './pages/candidature/candidature.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { StageComponent } from './pages/stage/stage.component';
import { UserprofilComponent } from './pages/userprofil/userprofil.component';
import { CandidatureFrontComponent } from './pages/candidature-front/candidature-front.component';
import { OffresComponent } from './pages/offres/offres.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { FormModifyCandComponent } from './pages/form-modify-cand/form-modify-cand.component';
import { FormAddCandComponent } from './pages/form-add-cand/form-add-cand.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AsideComponent,
    DashboardComponent,
    CategoryListComponent,
    NewCategoryComponent,
    CandidatureComponent,
    CommunicationComponent,
    EntrepriseComponent,
    EvenementComponent,
    StageComponent,
    UserprofilComponent,
    CandidatureFrontComponent,
    OffresComponent,
    SucessComponent,
    FormModifyCandComponent,
    FormAddCandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule, 
    // DataTablesModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
