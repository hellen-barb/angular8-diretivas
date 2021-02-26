import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: "bob", role: "admin", lastlogin: new Date('2/1/2018')},
    {login: "lia", role: "user", lastlogin: new Date('4/26/2018')},
    {login: "renata", role: "user", lastlogin: new Date('11/1/2018')},
    {login: "josefa", role: "admin", lastlogin: new Date('7/7/2018')}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
