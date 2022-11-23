import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/Features/services/auth.service';
import { LoginUser } from '../../models';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg! : FormGroup
  UserConnected : LoginUser | null = null

  constructor(private _router : Router, private _authService : AuthService, private _formBuilder : FormBuilder, private _App: AppComponent) { }

    ngOnInit(): void {
      this.fg = this._formBuilder.group({
        Login : [null, Validators.required],
        Password : [null, Validators.required]     
      })
      if(localStorage.getItem('Connect') === 'true'){
        this._router.navigate(['home'])
      }
    }

    submit(){
      if(this.fg.invalid){
        return;
      }
      this._authService.Login(this.fg.value)
    }

}
