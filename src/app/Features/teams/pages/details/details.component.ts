import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/Features/services/teams.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _teamsService : TeamsService, private _formBuilder : FormBuilder, private _Http : HttpClient, private _router : Router) { }

  ngOnInit(): void {
  }

}
