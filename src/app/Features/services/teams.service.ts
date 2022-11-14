import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamsDisplay } from '../teams/models';



@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  TeamsList : TeamsDisplay[] = []
  StateSubjectTeamsList : Subject<TeamsDisplay[]> = new Subject<TeamsDisplay[]>();



  constructor(private _Http : HttpClient, private _router : Router, private _messageService : MessageService) { }




  GetTeamsList(){
    return this._Http.get<TeamsDisplay[]>(environment.api_base_url + 'Team').subscribe(
    {
      next : (data: TeamsDisplay[]) => {this.TeamsList = data, this.StateSubjectTeamsList.next(this.TeamsList)},
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

}

