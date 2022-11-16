import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/Features/services/teams.service';
import { MenuItem } from 'primeng/api';
import { TeamsDisplay } from '../../models';



@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dockItems!: MenuItem[];
  TeamDetails! : TeamsDisplay;


  constructor(private _teamsService : TeamsService, private _formBuilder : FormBuilder, private _Http : HttpClient, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {


    this._teamsService.StateSubjectTeamDetails.subscribe({
      next : (data : TeamsDisplay) => this.TeamDetails = data
    })

    this.GetTeamDetails(this._activatedRoute.snapshot.params['id']);

    


    this.dockItems = [
      {
          label: 'Players',
          icon: "assets/images/dock/players.svg"    
      },
      {
          label: 'Schedule',
          icon: "assets/images/dock/schedule.svg"
      },
      {
          label: 'Chat',
          icon: "assets/images/dock/chat.svg"    
      },
      {
          label: 'Stats',
          icon: "assets/images/dock/stat.svg"    
      },
      {
          label: 'Settings',
          icon: "assets/images/dock/settings.svg"    
      }
    ]



    
  }
  GetTeamDetails(id: string) {
    this._teamsService.GetTeamDetails(id);
    console.log(this.TeamDetails);
    
  }

  GetTeamsList(){
    this._teamsService.GetTeamsList();
    
  }

}
