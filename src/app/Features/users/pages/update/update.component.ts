import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { UsersService } from 'src/app/Features/services/users.service';
import { UserDetails, UserForm } from '../../models';

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  fg! : FormGroup
  UserForm: UserForm = {pseudo: '', email:'', password:''}
  id! : string

  
  // formGroup : FormGroup;

  constructor(private _usersService : UsersService, private _formBuilder : FormBuilder, private _Http : HttpClient, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this._usersService.StateSubjectUserForm.subscribe({
      next : (data : UserForm) => this.UserForm = data
    })
    this.GetById(this._activatedRoute.snapshot.params['id'])




    //remplir au chargement

    this.fg = this._formBuilder.group({
      
      
      Pseudo : [null, Validators.required, /*RxwebValidators.compare({conditionalExpression : this.pseudo})*/],
      Email : [null, [Validators.required, RxwebValidators.email()]],
      Password : [null, Validators.required],
      ConfirmPassword : [null, RxwebValidators.compare({fieldName: 'Password'})],
      
      
    })
    
    

  }

  // ngAfterViewChecked(){
  //   this.fg.setValue({
  //     Pseudo : this.UserForm.pseudo,
  //     Email: this.UserForm.email,
  //     Password : this.UserForm.password,
  //     ConfirmPassword : this.UserForm.password,
  //   })
  // }

  // setDefaultValue(){
  //   this.formGroup.patchValue({
  //     Id : this.items[1].value
  //   })
  // }


  validateAllFormFields(formGroup: FormGroup) { 

    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field); 

      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });

      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }

  hasError(myForm : FormGroup, inputName : string, validator : string) : boolean | undefined {

    return myForm.get(inputName)?.hasError(validator) && (myForm.get(inputName)?.touched|| (myForm.get(inputName)?.dirty))
  }


  //trouver moyen d appliquer setvalue ...
  
  submit(){

    if (this.fg.invalid) {

      this.validateAllFormFields(this.fg)
      return
    }


    let UpdateUser : UserDetails = {
      id : this._activatedRoute.snapshot.params['id'],
      pseudo : this.fg.get('Pseudo')?.value,
      email : this.fg.get('Email')?.value,
      password : this.fg.get('Password')?.value,
      role : 3,
    }
    this._usersService.UpdateUser(UpdateUser)
    }

    GetById(id : string){
      
      this._usersService.GetById(id)
    }

}

