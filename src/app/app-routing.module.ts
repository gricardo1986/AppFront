import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { DetailsRolComponent } from './components/roles/details-rol/details-rol.component';
import { NewRolComponent } from './components/roles/new-rol/new-rol.component';
import { EditRolComponent } from './components/roles/edit-rol/edit-rol.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: "roles", component: RolesListComponent, canActivate:[LoginGuard]},
  {path: "roles/new", component: NewRolComponent, canActivate:[LoginGuard]},
  {path: "roles/edit/:id", component: EditRolComponent, canActivate:[LoginGuard]},
  {path: "roles/:id", component: DetailsRolComponent, canActivate:[LoginGuard]},

  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
