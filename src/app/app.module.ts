import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { HomeComponent } from './HomePage/home/home.component';
import { CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    MessageModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],


  providers: [{provide : LOCALE_ID, useValue : 'fr-BE'},
  MessageService],
  bootstrap: [AppComponent]

  
})



export class AppModule { }
