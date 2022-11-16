import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/Features/services/teams.service';
import { MenuItem } from 'primeng/api';
import { TeamForm } from '../../models';

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  fg! : FormGroup
  TeamForm!: TeamForm
  constructor(private _teamsService : TeamsService, private _formBuilder : FormBuilder, private _Http : HttpClient, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this._teamsService.StateSubjectTeamForm.subscribe({
      next : (data : TeamForm) => {this.TeamForm = data,

    this.fg = this._formBuilder.group(
      {
      Name: new FormControl(this.TeamForm.name, Validators.required),
      Sport: new FormControl(this.TeamForm.sport, Validators.required),
      UserId: new FormControl(this.TeamForm.userId, Validators.required),
      }
    )


  }})
  this.GetById(this._activatedRoute.snapshot.params['id'])
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

      GetById(id : string){
      
        this._teamsService.GetById(id)
      }

}
