import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamForm, TeamsDisplay } from '../teams/models';



@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  TeamsList : TeamsDisplay[] = []
  TeamDetails! : TeamsDisplay
  TeamForm! : TeamForm

  StateSubjectTeamsList : Subject<TeamsDisplay[]> = new Subject<TeamsDisplay[]>();
  StateSubjectTeamDetails : Subject<TeamsDisplay> = new Subject<TeamsDisplay>();
  StateSubjectTeamForm : Subject<TeamForm> = new Subject<TeamForm>();


  constructor(private _Http : HttpClient, private _router : Router, private _messageService : MessageService) { }




  GetTeamsList(){
    return this._Http.get<TeamsDisplay[]>(environment.api_base_url + 'Team').subscribe(
    {
      next : (data: TeamsDisplay[]) => {this.TeamsList = data, this.StateSubjectTeamsList.next(this.TeamsList)},
      error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}    
    })
  }

  GetTeamDetails(id: string){
    console.log(id);
    
    return this._Http.get<TeamsDisplay>(environment.api_base_url + 'Team/' + id).subscribe(
      {
        next : (data: TeamsDisplay) => {this.TeamDetails = data, this.StateSubjectTeamDetails.next(this.TeamDetails)},
        error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}    
      })
    }

  CreateTeam(value : FormGroup){
    return this._Http.post(environment.api_base_url + 'Team', value.value).subscribe(
      {
        next: () => {this._router.navigate(['/teams'])},
        error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
        },
      })
  }
  
  DeleteTeam(id : string){
    this._Http.delete(environment.api_base_url + 'Team/' + id).subscribe(
      {
        next: () => {this.GetTeamsList()},
        error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
        },
      })
  }


  UpdateUser(value : TeamsDisplay){
    this._Http.post(environment.api_base_url + 'User/update', value).subscribe(
    {
      next: () => {this._router.navigate(['/users'])},
      error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
      },
    })
  }

  GetById(id : string){
    this._Http.get<TeamForm>(environment.api_base_url + 'Team/' + id).subscribe({
      next: (data : TeamForm) => {this.TeamForm = data, console.log(this.TeamForm.name)
      , this.StateSubjectTeamForm.next(this.TeamForm) },
  
      error: (response) => {this._messageService.add({severity: 'error', summary: response.error, life: 3000}), console.log(response.error);
      },
    })
  }

}

