import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Players, Teamplayers } from '../teams/models';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {

  Players : Players[] = []
  StateSubjectPlayers : Subject<Players[]> = new Subject<Players[]>() 
  // TeamPlayers! : Teamplayers
  constructor(private _Http : HttpClient, private _router : Router, private _messageService : MessageService) { }







  GetPlayers(id: string){
    return this._Http.get<Players[]>(environment.api_base_url + 'Team/Player/' + id).subscribe(
    {
      next : (data: Players[]) => {this.Players = data, this.StateSubjectPlayers.next(this.Players)},
      error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}
    })
  }
  

  AddPlayer(TeamId : string){
    return this._Http.post<string>(environment.api_base_url + 'Team/' + TeamId, TeamId).subscribe(
      {
        next: () => {this.GetPlayers(TeamId)},
        error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}
      })
  }

  DeletePlayer(TeamId : string){
    return this._Http.delete(environment.api_base_url + 'Team/Player/' + TeamId).subscribe(
      {
        next: () => {this.GetPlayers(TeamId)},
        error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}
      }
    )
  }




}
