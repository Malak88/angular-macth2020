import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-matches',
  templateUrl: './update-matches.component.html',
  styleUrls: ['./update-matches.component.css']
})
export class UpdateMatchesComponent implements OnInit {

  id: number;
  matches: Matches;

  constructor(private matchesService: MatchesService,
    private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.matches= new Matches();

    this.id = this.route.snapshot.params['id'];

    this.matchesService.getMatches(this.id)
      .subscribe(data => {
        console.log(data)
        this.matches = data;
      }, error => console.log(error));
  }

  updateMatches() {
    this.matchesService.updateMatches(this.id, this.matches)
      .subscribe(data => console.log(data), error => console.log(error));
    this.matches = new Matches();
    this.gotoList();
  }


  onSubmit() {
    this.updateMatches();    
  }

  gotoList() {
    this.router.navigate(['/matches']);
  }
  list(){
    this.router.navigate(['matches']);
  }

}
