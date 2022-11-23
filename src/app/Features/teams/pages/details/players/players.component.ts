import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TeamDetailsService } from 'src/app/Features/services/team-details.service';
import { Players } from '../../../models';


@Component({
  templateUrl: './Players.component.html',
  styleUrls: ['./Players.component.scss']
})
export class PlayersComponent implements OnInit {

  dockItems!: MenuItem[];
  Players : Players[] = []
  // id!  : string;
  UserId = localStorage.getItem('id');
  TeamId = this._activatedRoute.snapshot.params['id']

  constructor(private _teamDetailsService: TeamDetailsService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._teamDetailsService.StateSubjectPlayers.subscribe(
      {
        next : (data : Players[]) => this.Players = data
      }
    )
    this.GetPlayers()

  }

  GetPlayers(){
    this._teamDetailsService.GetPlayers(this._activatedRoute.snapshot.params['id']);
  }


  GoToAddplayer(){
    
    this._router.navigate(['teams/addplayer/' + this._activatedRoute.snapshot.params['id']]);
  }

  AddPlayer(TeamId: string){
    
    console.log(TeamId);
    this._teamDetailsService.AddPlayer(TeamId);
  }

  DeletePlayer(TeamId : string){
    this._teamDetailsService.DeletePlayer(TeamId)
  }

}
