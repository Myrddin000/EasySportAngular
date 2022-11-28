import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/Features/services/games.service';

@Component({
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent implements OnInit {


  fg! : FormGroup

  constructor(private _gamesService : GamesService, private _Http : HttpClient, private _router : Router, private _formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.fg = this._formBuilder.group({

      title: [null, Validators.required],
      date: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      teamId: [localStorage.getItem('TeamId'), Validators.required],

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
      this._gamesService.AddGame(this.fg)
      }

}
