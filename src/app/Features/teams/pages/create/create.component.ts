import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/Features/services/teams.service';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fg! : FormGroup

  test = localStorage.getItem('id')

  // UserId! : string;

  constructor(private _teamsService : TeamsService, private _Http : HttpClient, private _router : Router, private _formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.fg = this._formBuilder.group({
      Name: [null, Validators.required],
      Sport: [null, Validators.required],
      UserId: [localStorage.getItem('id'), Validators.required],
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
      this._teamsService.CreateTeam(this.fg)
      }

    
  


}
