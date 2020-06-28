import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Arbitre } from 'src/app/common/arbitre';
import { ArbitresService } from 'src/app/services/arbitres.service';
//import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';



@Component({
  selector: 'app-arbitres',
  templateUrl: './arbitres.component.html',
  styleUrls: ['./arbitres.component.css']
})
export class ArbitresComponent implements OnInit {

  arbitres:Observable<Arbitre[]>;

  constructor(private arbitreService:ArbitresService,private router: Router,
    private matchesService: MatchesService) { }

    //matches: Observable<Matches[]>;

  ngOnInit() {
    this.reloadData();
    //this.matchesService.getMatchesList();
  }
  reloadData() {
    this.arbitres = this.arbitreService.getArbitresList();
  }

  deleteArbitre(id: number) {
    this.arbitreService.deleteArbitre(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  arbitreDetails(id: number){
    this.router.navigate(['arbitreDetails', id]);
  }

  updateArbitre(id: number){
    this.router.navigate(['updateArbitre', id]);
  }

}
