import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:Observable<Matches[]>;


  constructor(private matchesService:MatchesService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    }

  reloadData() {
    this.matches = this.matchesService.getMatchesList();
  }

  deleteMatches(id: number) {
    this.matchesService.deleteMatches(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  matchesDetails(id: number){
    this.router.navigate(['matchesDetails', id]);
  }

  updateMatches(id: number){
    this.router.navigate(['updateMatches', id]);
  }


}
