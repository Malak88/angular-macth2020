import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Equipe} from 'src/app/common/equipe';
import { EquipesService } from 'src/app/services/equipes.service';  

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.css']
})
export class EquipeDetailsComponent implements OnInit {
  id: number;
  equipe:Equipe;

  constructor(private equipeService: EquipesService,private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.equipe = new Equipe();

    this.id = this.route.snapshot.params['id'];
    
    this.equipeService.getEquipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.equipe = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['equipes']);
  }

}
