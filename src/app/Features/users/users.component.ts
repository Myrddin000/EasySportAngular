import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UsersService } from '../services/users.service';
import { UserConnected, UsersDisplay } from './models';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent /*implements OnInit*/ {

  items! : MenuItem[];

  UsersList : UsersDisplay[] = [];
  
  cols : any[] = [];

  id! : string 

  index!: number

  constructor(private _usersService : UsersService, private _router : Router, private _Http : HttpClient,) { }

 

      ngOnInit(): void {

        this._usersService.StateSubjectUsersList.subscribe({
          next : (data : UsersDisplay[]) => this.UsersList = data
        })

        this.GetUsersList();

        this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times',
              command: () => {

                this.DeleteUser(this.id);
            },
              
          },
      ];
    }

    GetUsersList(){
      this._usersService.GetUsersList();
    }
    DeleteUser(id : string){
      this._usersService.DeleteUser(id);
    }

    GetId(id : string){
      
      this.id = id
    }

}
