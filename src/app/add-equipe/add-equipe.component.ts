import { League } from './../model/league.model';

import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe = new Equipe();
  league!: League[] 
  newid!:number;
  newleague!:League;
  constructor(private equipeservices: EquipeService,
    private router :Router) { }
  ngOnInit(): void {
    this.equipeservices.ListeLeague().
    subscribe(cats => {this.league = cats;
    console.log("aaaa"+cats);
    console.log(this.league);
    });
    }
 
  addEquipe(){
    this.newEquipe.league = this.league.find(cat => cat.idLeg == this.newid)!;
    console.log(this.newEquipe)
    this.equipeservices.ajouterEquipe(this.newEquipe)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['equipe']).then(()=>{window.location.reload();});
    });
    }
    
  
  

    
    

}
