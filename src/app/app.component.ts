import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from './Features/services/Menu.service';
import { AuthService } from './Features/services/auth.service';
import { UserConnected } from './Features/users/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EasySport_Front';
  items: MenuItem[] = [];
  UserConnected! : UserConnected

  constructor(private _MenuService : MenuService, private _AuthService : AuthService){

  }

ngOnInit() {
  
  this._MenuService.StateSubjectItemMenu.subscribe({
    next : (data : MenuItem[]) => {this.items = data}
  })

  this.GetMenu()


  }

  GetMenu(){
    this._MenuService.GetMenu()
  }

 
  Logout(){
    this._AuthService.Logout()
  }
}
