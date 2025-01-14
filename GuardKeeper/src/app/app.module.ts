import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { MenuComponent } from './screens/menu/menu.component';
import { AgentsComponent } from './screens/agents/agents.component';
import { PlacesComponent } from './screens/places/places.component';
import { EditPlacesComponent } from './screens/places/edit-places/edit-places.component';
import { AddPlacesComponent } from './screens/places/add-places/add-places.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AgentsComponent,
    PlacesComponent,
    EditPlacesComponent,
    AddPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ReactiveFormsModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
