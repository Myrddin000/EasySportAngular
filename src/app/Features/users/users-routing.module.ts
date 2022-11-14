import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [{ path: '', component: UsersComponent, children :[

]},
  {path: 'login', component : LoginComponent},
  {path: 'registration', component : RegistrationComponent},
  {path: 'update/:id', component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
