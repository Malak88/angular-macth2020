import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches-details',
  templateUrl: './matches-details.component.html',
  styleUrls: ['./matches-details.component.css']
})
export class MatchesDetailsComponent implements OnInit {

  id: number;
  matches: Matches;
  constructor(private route: ActivatedRoute,private router: Router,
    private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matches = new Matches();

    this.id = this.route.snapshot.params['id'];
    
    this.matchesService.getMatches(this.id)
      .subscribe(data => {
        console.log(data)
        this.matches = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['matches']);
  }
}
