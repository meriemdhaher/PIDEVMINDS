import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { NewCategoryComponent } from './pages/category/new-category/new-category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component'; 
import { EvenementComponent } from './pages/evenement/evenement.component'; 
import { CommunicationComponent } from './pages/communication/communication.component'; 
import { StageComponent } from './pages/stage/stage.component';
import { CandidatureComponent } from './pages/candidature/candidature.component'; 
import { UserprofilComponent } from './pages/userprofil/userprofil.component';
import { CandidatureFrontComponent } from './pages/candidature-front/candidature-front.component';
import { OffresComponent } from './pages/offres/offres.component';
import { SucessComponent } from './pages/sucess/sucess.component';
import { FormModifyCandComponent } from './pages/form-modify-cand/form-modify-cand.component';
import { FormAddCandComponent } from './pages/form-add-cand/form-add-cand.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'category', component: CategoryListComponent },
  { path: '', redirectTo: 'view-category', pathMatch: 'full' }, 
  { path:'new-category', component: NewCategoryComponent },
  {path:'entreprise', component:EntrepriseComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'communication',component:CommunicationComponent},
  {path:'stage',component:StageComponent},
  {path:'candidature',component:CandidatureComponent},
  {path:'candidatureFront',component:CandidatureFrontComponent},
  {path:'offres',component:OffresComponent},
  {path:'sucess',component:SucessComponent},
  { path: 'modify-cand/:id', component: FormModifyCandComponent },
  { path:'addCandidature', component: FormAddCandComponent },
  {path:'userprofil',component:UserprofilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
