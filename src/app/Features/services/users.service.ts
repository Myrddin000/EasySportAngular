import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRegistered, UsersDisplay } from '../users/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  UserRegistered : UserRegistered | null = null

  UsersList : UsersDisplay[] = []
  StateSubjectUsersList : Subject<UsersDisplay[]> = new Subject<UsersDisplay[]>();

  constructor(private _Http : HttpClient, private _router : Router, private _messageService : MessageService) { }

  

  GetUsersList(){

    return this._Http.get<UsersDisplay[]>(environment.api_base_url + 'User').subscribe(
      {
        next : (data: UsersDisplay[]) => {this.UsersList  =  data, this.StateSubjectUsersList.next(this.UsersList)}, 
        error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}
      }

    )}

    NewUser(value : FormGroup){
      return this._Http.post(environment.api_base_url + 'User', value.value).subscribe(
        {
          next: () => {this._router.navigate(['/users'])},
          error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
          },
        })
    }

    DeleteUser(id : string){
      this._Http.delete(environment.api_base_url + 'User/' + id).subscribe(
        {
          next: () => {this.GetUsersList()},
          error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
          },
        })
    }

}
