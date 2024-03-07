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
import { ChatComponent } from './pages/communication/chat/chat.component';
import { UserComponent } from './pages/communication/user/user.component';
import { MainComponent } from './pages/communication/main/main.component';

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
  {path:'userprofil',component:UserprofilComponent},
  { path: 'chat', component: ChatComponent },
  { path: 'user', component: UserComponent },
  { path: 'main', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
