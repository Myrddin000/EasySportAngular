import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
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

  constructor(private _AuthService : AuthService){

  }

  ngOnInit() {
    
    this._AuthService.StateSubjectUserConnect.subscribe({
      next : (data : UserConnected) => this.UserConnected = data
    })
    this._AuthService.StateSubjectItemMenu.subscribe({
      next : (data : MenuItem[]) => this.items = data
    })

  
    this.GetUsersConnect()
    this.GetMenu()


  }


  GetUsersConnect(){
    this._AuthService.GetUserConnect()
  }

  GetMenu(){
    this._AuthService.GetMenu()
  }

 
  Logout(){
    
    this._AuthService.Logout()
    
  }

}
