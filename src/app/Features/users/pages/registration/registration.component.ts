import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Features/services/users.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  fg! : FormGroup

  constructor(private _usersServices: UsersService, private _formBuilder : FormBuilder, private _Http : HttpClient, private _router :  Router) { }

  ngOnInit(): void {

    this.fg = this._formBuilder.group({
      
      Pseudo : [null, Validators.required, /*RxwebValidators.compare({conditionalExpression : this.pseudo})*/],
      Email : [null, [Validators.required, RxwebValidators.email()]],
      Password : [null, Validators.required],
      ConfirmPassword : [null, RxwebValidators.compare({fieldName: 'Password'})],
      
    })


  }


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

  submit(){

    if (this.fg.invalid) {

      this.validateAllFormFields(this.fg)
      return
    }
    this._usersServices.NewUser(this.fg)
    }
}
