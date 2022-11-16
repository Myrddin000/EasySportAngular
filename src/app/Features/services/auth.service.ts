import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { LoginUser, UserConnected } from '../users/models';
import { environment } from 'src/environments/environment';
// import { Token } from '@angular/compiler';
import { MenuItem, MessageService } from 'primeng/api';
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserRegistered : LoginUser | null = null
  UserConnected : UserConnected = {token :'', pseudo : '', email :'', connect : false, role : 3}
  constructor(private _Http: HttpClient, private _router: Router, private _messageService : MessageService) { }

  StateSubjectUserConnect : Subject<UserConnected> = new Subject<UserConnected>();
  StateSubjectItemMenu : Subject<MenuItem[]> = new Subject<MenuItem[]>();

  item : MenuItem[] = []


  Login(value: any){

    return this._Http.post<LoginUser>(environment.api_base_url + 'Auth', value).subscribe(
      
      {
        next : (data: LoginUser) => {this.UserRegistered = data,
          
          localStorage.setItem('token', this.UserRegistered.token),
          localStorage.setItem('id', this.UserRegistered.userRegistered.id)
          localStorage.setItem('pseudo', this.UserRegistered.userRegistered.pseudo)
          localStorage.setItem('email', this.UserRegistered.userRegistered.email)
          localStorage.setItem('role', this.UserRegistered.userRegistered.role.toString())
          localStorage.setItem('connect', 'true'), this.IfUserConnected(), this.GetMenu(),
          this._router.navigate([''])},
        error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}
           
            
        }
        
    ) }

  IfUserConnected(){
    
    
    if(localStorage['connect'] === 'true'){
      
      this.UserConnected.token = localStorage.getItem('token')
      this.UserConnected.pseudo = localStorage.getItem('pseudo')
      this.UserConnected.email = localStorage.getItem('email')
      this.UserConnected.role = parseInt(localStorage['role'])

        this.UserConnected.connect = true
      } 
    else{
      this.UserConnected = {token :'', pseudo : '', email :'', connect : false, role : 3}
    }
    
    this.StateSubjectUserConnect.next(this.UserConnected)
      
      
    }

  Logout(){
    localStorage.clear()
    this.IfUserConnected()
    this.GetMenu()
  }

// NewUser(value : FormGroup){
//   return this._Http.post(environment.api_base_url + 'User', value.value).subscribe(
//     {
//       next: () => {this._router.navigate(['/users'])},
//       error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
//       },
//     })
// }

GetMenu(){
  this.item = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink : ['home']
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        visible : this.UserConnected.role == 1 ? true : false,
        routerLink : ['users']
    },
    {
        label: 'Team',
        icon: 'pi pi-fw pi-shield',
        routerLink : ['teams']
    }
];
this.StateSubjectItemMenu.next(this.item)
}




}



