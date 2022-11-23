import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TeamsService } from '../services/teams.service';
import { TeamsDisplay } from './models';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  TeamsList : TeamsDisplay [] = []
  id!  : string;
  items! : MenuItem[]

  constructor(private _teamsService : TeamsService, private _router : Router, private _Http : HttpClient,) { }

  ngOnInit(): void {

    localStorage.removeItem('TeamId')

    this._teamsService.StateSubjectTeamsList.subscribe({
      next : (data : TeamsDisplay[]) => this.TeamsList = data
    })

    this.GetTeamsList();

    this.items = [
      {
        label: 'Details',
        icon: 'pi pi-search-plus',
        command: () => {

          this.GoToDetails();
      },
    },
      {
          label: 'Edit',
          icon: 'pi pi-refresh',
          command: () => {

            this.GoToUpdate();
        },
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {

            this.DeleteTeam();
        },
          
      },
  ];

}


  GetTeamsList(){
    this._teamsService.GetTeamsList();
    
  }

  GetId(id : string){
      
    this.id = id
  }

  GoToDetails(){
    console.log(this.id);
    
    this._router.navigate(['teams/details/'+ this.id])
  }

  GoToUpdate(){
    console.log(this.id);

    this._router.navigate(['teams/update/'+ this.id])
    
  }

  DeleteTeam(){
    console.log(this.id);
    
    this._teamsService.DeleteTeam(this.id);
  }

}
