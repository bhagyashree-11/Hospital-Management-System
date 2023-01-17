import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';



import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { StaffComponent } from './staff/staff.component';
import { BillingComponent } from './billing/billing.component';
import { LoginComponent } from './login/login.component';
import { RegistratioinComponent } from './registratioin/registratioin.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    StaffComponent,
    BillingComponent,
    LoginComponent,
    RegistratioinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
