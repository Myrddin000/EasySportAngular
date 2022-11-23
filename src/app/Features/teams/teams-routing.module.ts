import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { PlayersComponent } from './pages/players/players.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatsComponent } from './pages/stats/stats.component';
import { UpdateComponent } from './pages/update/update.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [{ path: '', component: TeamsComponent, children:[

]},
  {path: 'details/:id', component : DetailsComponent},
  {path: 'update/:id', component : UpdateComponent},
  {path: 'create', component : CreateComponent},
  {path: 'players/:id', component : PlayersComponent},
  {path: 'schedule', component : ScheduleComponent},
  {path: 'chat', component : ChatComponent},
  {path: 'stats', component : StatsComponent},
  {path: 'settings', component : SettingsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
