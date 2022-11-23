import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/Features/services/teams.service';
import { TeamsDisplay } from '../../../models';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  TeamDetails! : TeamsDisplay;

  constructor(private _teamsService : TeamsService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this._teamsService.StateSubjectTeamDetails.subscribe({
      next : (data : TeamsDisplay) => this.TeamDetails = data
    })
    
  }


}
