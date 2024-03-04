import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { NewCategoryComponent } from './pages/category/new-category/new-category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component'; 
import { EvenementComponent } from './pages/evenement/evenement.component'; 
import { CommunicationComponent } from './pages/communication/communication.component'; 
import { CandidatureComponent } from './pages/candidature/candidature.component'; 
import { UserprofilComponent } from './pages/userprofil/userprofil.component';
import { EtudiantListComponent } from './pages/etudiant/etudiant-list/etudiant-list.component';
import { EtudiantNewComponent } from './pages/etudiant/etudiant-new/etudiant-new.component';
import { EtudiantUpdateComponent } from './pages/etudiant/etudiant-update/etudiant-update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimelineComponent } from './timeline-component/timeline-component.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'category', component: CategoryListComponent },
  { path: '', redirectTo: 'view-category', pathMatch: 'full' }, 
  { path:'new-category', component: NewCategoryComponent },
  {path:'entreprise', component:EntrepriseComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'communication',component:CommunicationComponent},
  {path:'candidature',component:CandidatureComponent},
  {path:'userprofil',component:UserprofilComponent},
  { path:'etudiant', component:EtudiantListComponent },
  { path: '', redirectTo: 'view-etudiant', pathMatch: 'full' }, 
  { path:'etudiant-new', component: EtudiantNewComponent },
  { path:'etudiant-update/:id', component: EtudiantUpdateComponent },
  { path: 'timeline', component: TimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
