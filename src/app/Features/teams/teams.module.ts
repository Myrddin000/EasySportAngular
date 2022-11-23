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
import { UpdateComponent } from './pages/update/update.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ChatComponent } from './pages/chat/chat.component';
import { StatsComponent } from './pages/stats/stats.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PlayersComponent } from './pages/players/players.component';




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
    
  ]
})
export class TeamsModule { }
