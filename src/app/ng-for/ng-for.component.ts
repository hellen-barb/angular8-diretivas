import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Ana", 
    "Miguel", 
    "Geovanni",
    "Ariel",
    "Hellen"
  ];

  cities = [
    {name: "São Vicente" , state: "SP", age: 90},
    {name: "Rio de Janeiro" , state: "RJ", age: 60},
    {name: "Macapá" , state: "AM", age: 16}
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
