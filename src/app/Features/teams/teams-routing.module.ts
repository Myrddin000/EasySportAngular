import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { IndexComponent } from './pages/details/index/index.component';
import { PlayersComponent } from './pages/details/players/players.component';
import { StatsComponent } from './pages/details/stats/stats.component';
import { UpdateComponent } from './pages/update/update.component';
import { TeamsComponent } from './teams.component';
import { ScheduleComponent } from './pages/details/schedule/schedule.component';
import { ChatComponent } from './pages/details/chat/chat.component';
import { SettingsComponent } from './pages/details/settings/settings.component';

const routes: Routes = [{ path: '', component: TeamsComponent, children:[

]},
  {path: 'create', component : CreateComponent},
  {path: 'update/:id', component : UpdateComponent},
  {path: 'details/:id', component : DetailsComponent,
  children: [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component : IndexComponent},
    {path: 'players/:id', component : PlayersComponent},
    {path: 'schedule', component : ScheduleComponent},
    {path: 'chat', component : ChatComponent},
    {path: 'stats', component : StatsComponent},
    {path: 'settings', component : SettingsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
