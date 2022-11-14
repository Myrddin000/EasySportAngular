import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { UpdateComponent } from './pages/update/update.component';



@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    RegistrationComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
		ButtonModule,
    RippleModule,
    CardModule,
    CalendarModule,
    SelectButtonModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    
    
  ]
})
export class UsersModule { }
