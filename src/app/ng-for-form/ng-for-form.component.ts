import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  city: string = "";
  phone: string = "";
  age: number = 0;

  cities = [
    {name: "São Vicente" , state: "SP"},
    {name: "Rio de Janeiro" , state: "RJ"},
    {name: "Macapá" , state: "AM"}
  ]

  clients = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.clients.push( //pusha 
      {
        name: this.name,
        address: this.address,
        age: this.age,
        phone: this.phone,
        city: this.city
      }
    );
    this.cancel();
    console.log(this.clients);  
  }
  

  cancel(){
    this.name = "";
    this.address = "";
    this.age = 0; 
    this.phone = "";  
    this.city = ""
  }

  delete(i: number){
    this.clients.splice(i, 1); //n do indice, quantos quer apagar
    
  }
}
