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
import { DockModule } from 'primeng/dock';
import { ChipModule } from 'primeng/chip';
import { TokenInterceptorService } from './Features/services/token-interceptor.service';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { registerLocaleData } from '@angular/common'




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
   

]);

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
    DockModule,
    ChipModule,
    FullCalendarModule,
    
     
    
  ],


  providers: [{provide : LOCALE_ID, useValue : 'fr-FR'},
  MessageService, {
      provide : HTTP_INTERCEPTORS, 
      useClass : TokenInterceptorService,
      multi : true
  }],
  bootstrap: [AppComponent]

  
})



export class AppModule { }
