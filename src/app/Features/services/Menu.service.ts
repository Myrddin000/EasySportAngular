import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';
import { Subject } from "rxjs";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  StateSubjectItemMenu : Subject<MenuItem[]> = new Subject<MenuItem[]>();

  item : MenuItem[] = []


  GetMenu(){
    this.item = [
      {
          label: 'Users',
          icon: 'pi pi-fw pi-users',
          items: [
              {label: 'Registration', icon: 'pi pi-fw pi-plus-circle'},
              {label: 'Display', icon: 'pi pi-fw pi-list'},
              ]
      },
      {
          label: 'Team',
          icon: 'pi pi-fw pi-shield',
          items: [
            {label: 'New', icon: 'pi pi-fw pi-plus-circle'},
            {label: 'Display', icon: 'pi pi-fw pi-list'},
          ]
      }
  ];
  this.StateSubjectItemMenu.next(this.item)
  }


}


