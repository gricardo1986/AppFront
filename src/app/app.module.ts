import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { DetailsRolComponent } from './components/roles/details-rol/details-rol.component';
import { NewRolComponent } from './components/roles/new-rol/new-rol.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRolComponent } from './components/roles/edit-rol/edit-rol.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { MenuComponent } from './components/ui/menu/menu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesListComponent,
    DetailsRolComponent,
    NewRolComponent,
    EditRolComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
