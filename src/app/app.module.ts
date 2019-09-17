import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ServiciosModule } from './servicios/servicios.module'
import { CapacitacionModule } from './capacitacion/capacitacion.module'
import { AsesoriaModule } from './asesoria/asesoria.module'
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatSortModule, MatTableModule, MatCheckboxModule, MatPaginatorModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ServiciosComponent } from './servicios/servicios.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { AsesoriaComponent } from './asesoria/asesoria.component';
import { RhComponent } from './rh/rh.component';
import { SocialComponent } from './social/social.component';
import { OtrosServiciosComponent } from './otros-servicios/otros-servicios.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    CapacitacionComponent,
    AsesoriaComponent,
    RhComponent,
    SocialComponent,
    OtrosServiciosComponent,
    NavbarComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    MDBBootstrapModule.forRoot(),    
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    ServiciosModule,
    CapacitacionModule,

          
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
