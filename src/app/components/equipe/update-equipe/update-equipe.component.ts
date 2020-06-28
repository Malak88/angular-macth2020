import { Equipe } from 'src/app/common/equipe';
import { EquipesService } from 'src/app/services/equipes.service';
import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  id: number;
  equipe: Equipe;

  constructor(private equipeService: EquipesService,private matchesService: MatchesService,
    private router:Router,private route: ActivatedRoute) { }

    matches: Observable<Matches[]>;

  ngOnInit(): void {

    this.equipe= new Equipe();
    this.equipe.matches= new Matches();

    this.id = this.route.snapshot.params['id'];

    this.matchesService.getMatchesList().subscribe(data => {
      this.matches = data;
      console.log(data);
    });
    
    this.equipeService.getEquipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.equipe = data;
      }, error => console.log(error));
  }

  
  updateEquipe() {
    this.equipeService.updateEquipe(this.id, this.equipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.equipe = new Equipe();
    this.gotoList();
  }


  onSubmit() {
    this.updateEquipe();    
  }

  gotoList() {
    this.router.navigate(['/equipes']);
  }
  list(){
    this.router.navigate(['equipes']);
  }

}
