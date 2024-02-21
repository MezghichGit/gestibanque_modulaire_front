import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ContactComponent,
    AproposComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    VitrineRoutingModule,
   
  ]
})
export class VitrineModule { }
