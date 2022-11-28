import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { DockModule } from 'primeng/dock';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { UpdateComponent } from './pages/update/update.component';
import { StatsComponent } from './pages/details/stats/stats.component';
import { PlayersComponent } from './pages/details/players/players.component';
import { IndexComponent } from './pages/details/index/index.component';
import { ScheduleComponent } from './pages/details/schedule/schedule.component';
import { ChatComponent } from './pages/details/chat/chat.component';
import { SettingsComponent } from './pages/details/settings/settings.component';
import { AddScheduleComponent } from './pages/details/schedule/add-schedule/add-schedule.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    TeamsComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
    ScheduleComponent,
    ChatComponent,
    StatsComponent,
    SettingsComponent,
    PlayersComponent,
    IndexComponent,
    AddScheduleComponent,
    
  
    
  ],

  imports: [
    CommonModule,
    TeamsRoutingModule,
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
    DockModule,
    FullCalendarModule
    
    
    
  ],
})
export class TeamsModule { }
