import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './pages/welcome/signup/signup.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './pages/app/user-routing.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PrimengModule } from './primeng.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    PrimengModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  exports: [
    PrimengModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
