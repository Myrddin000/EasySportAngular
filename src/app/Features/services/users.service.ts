import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetails, UserForm, UserRegistered, UsersDisplay } from '../users/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  UserRegistered : UserRegistered | null = null
  UserDetails : UserDetails | null = null
  UsersList : UsersDisplay[] = []
  UserForm! : UserForm
  
  StateSubjectUsersList : Subject<UsersDisplay[]> = new Subject<UsersDisplay[]>();
  StateSubjectUserForm : Subject<UserForm> = new Subject<UserForm>();

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

    UpdateUser(value : UserDetails){
      this._Http.post(environment.api_base_url + 'User/update', value).subscribe(
      {
        next: () => {this._router.navigate(['/users'])},
        error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
        },
      })
    }

    GetById(id : string){
      this._Http.get<UserForm>(environment.api_base_url + 'User/GetById?Id=' + id).subscribe({
        next: (data : UserForm) => {this.UserForm = data, console.log(this.UserForm)
        , this.StateSubjectUserForm.next(this.UserForm) },
    
        error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
        },
      })
    }

}
