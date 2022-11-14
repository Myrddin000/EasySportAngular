import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [{ path: '', component: TeamsComponent, children:[

]},
  {path: 'details/:id', component : DetailsComponent},
  {path: 'create', component : CreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
