import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameTime } from '../teams/models';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

 
  GamesList : GameTime[] = []

  StateSubjectGamesList : Subject<GameTime[]> = new Subject<GameTime[]>();


  constructor(private _Http : HttpClient, private _messageService : MessageService) { }


  GetGames(id: string){
    return this._Http.get<GameTime[]>(environment.api_base_url + 'Game').subscribe(
    {
      next : (data: GameTime[]) => {this.GamesList = data; this.StateSubjectGamesList.next(this.GamesList); console.log(this.GamesList);
      },
      error : (response) => {this._messageService.add({severity:'error', summary: response.error, life: 3000})}    
    })
  }



}



