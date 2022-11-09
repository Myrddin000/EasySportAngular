import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { LoginUser, UserConnected } from '../users/models';
import { environment } from 'src/environments/environment';
// import { Token } from '@angular/compiler';
import { MenuService } from './Menu.service';
import { MessageService } from 'primeng/api';
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserRegistered : LoginUser | null = null
  UserConnected : UserConnected = {token:'', pseudo: '', email:'', connect: false, role: 3}
  constructor(private _Http: HttpClient, private _router: Router, private _messageService : MessageService, private _menuService : MenuService) { }

  StateSubjectUserConnect : Subject<UserConnected> = new Subject<UserConnected>();




  Login(value: any){

    return this._Http.post<LoginUser>(environment.api_base_url + 'Auth', value).subscribe(
      {
        next : (data: LoginUser) => {this.UserRegistered = data,
          
          localStorage.setItem('token', this.UserRegistered.token),
          localStorage.setItem('id', this.UserRegistered.userRegistered.id)
          localStorage.setItem('pseudo', this.UserRegistered.userRegistered.pseudo)
          localStorage.setItem('email', this.UserRegistered.userRegistered.email)
          localStorage.setItem('role', this.UserRegistered.userRegistered.role.toString())
          localStorage.setItem('Connect', 'true'), this.GetUserConnect(), this._menuService.GetMenu(),
          this._router.navigate([''])},
          error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}

        }
    ) }

  GetUserConnect(){
    if(localStorage.length !== 0){
      this.UserConnected.token = localStorage.getItem('token')
      this.UserConnected.pseudo = localStorage.getItem('pseudo')
      this.UserConnected.email = localStorage.getItem('email')
      this.UserConnected.role = parseInt(localStorage['role'])

      if(localStorage['Connect'] === 'true') {
        this.UserConnected.connect = true
      }
      else 
        this.UserConnected.connect = false
        this.StateSubjectUserConnect.next(this.UserConnected)
      }
    }

  Logout(){
    localStorage.clear()
    this.GetUserConnect()
    this._menuService.GetMenu()
  }

NewUser(value : FormGroup){
  return this._Http.post(environment.api_base_url + 'users', value.value).subscribe(
    {
      next: () => {this._router.navigate([''])},
      error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000})},
    })
}




}



