import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Equipe } from 'src/app/common/equipe';
import { EquipesService } from 'src/app/services/equipes.service';
@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  equipes:Observable<Equipe[]>;

  constructor(private equipeService:EquipesService,private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.equipes = this.equipeService.getEquipesList();
  }

  deleteEquipe(id: number) {
    this.equipeService.deleteEquipe(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  equipeDetails(id: number){
    this.router.navigate(['EquipeDetails', id]);
  }

  updateEquipe(id: number){
    this.router.navigate(['updateEquipe', id]);
  }

}
