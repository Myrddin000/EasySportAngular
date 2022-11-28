import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { GamesService } from 'src/app/Features/services/games.service';
import { GameTime } from '../../../models';






@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    headerToolbar: { center: 'dayGridMonth, timeGridWeek' },
    initialView: 'dayGridMonth',
    timeZone : 'UTC',
    events: [{
      
     
    }]
  };

  GamesList : GameTime[] = [];
  ShowDiv = false
  constructor(private _gamesService : GamesService) { }

  ngOnInit(): void {

    this._gamesService.StateSubjectGamesList.subscribe({
      next : (data : GameTime[]) => {this.GamesList = data; this.calendarOptions.events = this.GamesList.map(c => {return{title: c.title, start: c.startTime, end: c.endTime, display: 'list-item'};} )} 
    })


    this._gamesService.GetGames(localStorage['TeamId']);

  }

  GetGames(){
    this._gamesService.GetGames(localStorage['TeamId']);
  }

  toggleDisplayDiv() {  
    this.ShowDiv = !this.ShowDiv;  
  } 

}
