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
import { ChatComponent } from './pages/communication/chat/chat.component';
import { UserComponent } from './pages/communication/user/user.component';
import { MainComponent } from './pages/communication/main/main.component';
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
    ChatComponent,
    UserComponent,
    MainComponent,
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
