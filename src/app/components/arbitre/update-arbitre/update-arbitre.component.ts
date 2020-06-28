import { Arbitre } from 'src/app/common/arbitre';
import { ArbitresService } from 'src/app/services/arbitres.service';
import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-arbitre',
  templateUrl: './update-arbitre.component.html',
  styleUrls: ['./update-arbitre.component.css']
})
export class UpdateArbitreComponent implements OnInit {

  id: number;
  arbitre: Arbitre;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private arbitreService: ArbitresService,private matchesService: MatchesService) { }

    matches: Observable<Matches[]>;

  ngOnInit() {
    this.arbitre = new Arbitre();
    this.arbitre.matches= new Matches();

    this.id = this.route.snapshot.params['id'];

    this.matchesService.getMatchesList().subscribe(data => {
      this.matches = data;
      console.log(data);
    });
    
    this.arbitreService.getArbitre(this.id)
      .subscribe(data => {
        console.log(data)
        this.arbitre = data;
      }, error => console.log(error));
      
  }
 

  updateArbitre() {
    this.arbitreService.updateArbitre(this.id, this.arbitre)
      .subscribe(data => console.log(data), error => console.log(error));
    this.arbitre = new Arbitre();
    this.gotoList();
  }
 /* selectChangeHandler (event: any) {
    //update the ui
    this.arbitre.matches.id = event.target.value;
  }*/


  onSubmit() {
    this.updateArbitre();    
  }

  gotoList() {
    this.router.navigate(['/arbitres']);
  }
  list(){
    this.router.navigate(['arbitres']);
  }
  
}
