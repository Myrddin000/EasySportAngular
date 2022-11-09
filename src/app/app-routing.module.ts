import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';

const routes: Routes = 
[{ path: 'users', loadChildren: () => import('./Features/users/users.module').then(m => m.UsersModule) }, 
 { path: 'teams', loadChildren: () => import('./Features/teams/teams.module').then(m => m.TeamsModule) },
 
 { path: '', redirectTo : 'home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
