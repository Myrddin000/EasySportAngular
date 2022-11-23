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
  id! : string;


  constructor(private _teamsService : TeamsService, private _formBuilder : FormBuilder, private _Http : HttpClient, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    
    

    if (localStorage.getItem('TeamId') === null) {

      localStorage.removeItem('TeamId')
      localStorage.setItem('TeamId', this._activatedRoute.snapshot.params['id'])
    }
    this.id = localStorage['TeamId']

    this.GetTeamDetails();


    this.dockItems = [
      {
        label: 'home',
        icon: "assets/images/dock/home.svg",
        command: () => {
          this.GoToDetails();
        }    
      },
      {
          label: 'Players',
          icon: "assets/images/dock/players.svg", 
          command: () => {
            this.GoToPlayers();
        }   
      },
      {
          label: 'Schedule',
          icon: "assets/images/dock/schedule.svg",
          command: () => {
            this.GoToSchedule();
          }
      },
      {
          label: 'Chat',
          icon: "assets/images/dock/chat.svg",  
          command: () => {
            this.GoToChat();
          }  
      },
      {
          label: 'Stats',
          icon: "assets/images/dock/stat.svg",  
          command: () => {
            this.GoToStats();
          }  
      },
      {
          label: 'Settings',
          icon: "assets/images/dock/settings.svg",
          command: () => {
            this.GoToSettings();
          }    
      },
      
    ]


  }
  
  GetTeamDetails() {
    this._teamsService.GetTeamDetails(localStorage['TeamId']);
 
  }

  GetTeamsList(){
    this._teamsService.GetTeamsList();
  }

  GoToDetails(){
    this._router.navigate(['teams/details/:id/index/'])
    this.GetTeamDetails();
  }

  GoToPlayers(){
    
    this._router.navigate(['teams/details/:id/players/' + this.id])
  }

  GoToSchedule(){
    
    this._router.navigate(['teams/details/:id/schedule/'])
  }

  GoToChat(){
    
    this._router.navigate(['teams/details/:id/chat/'])
  }

  GoToStats(){
    
    this._router.navigate(['teams/details/:id/stats/'])
  }
  GoToSettings(){
    
    this._router.navigate(['teams/details/:id/settings/'])
  }





}
