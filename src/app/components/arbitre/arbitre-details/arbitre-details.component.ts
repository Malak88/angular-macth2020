import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Arbitre } from 'src/app/common/arbitre';
import { ArbitresService } from 'src/app/services/arbitres.service';

@Component({
  selector: 'app-arbitre-details',
  templateUrl: './arbitre-details.component.html',
  styleUrls: ['./arbitre-details.component.css']
})
export class ArbitreDetailsComponent implements OnInit {

  id: number;
  arbitre: Arbitre;

  constructor(private route: ActivatedRoute,private router: Router,
    private arbitreService: ArbitresService) { }

  ngOnInit() {
    this.arbitre = new Arbitre();

    this.id = this.route.snapshot.params['id'];
    
    this.arbitreService.getArbitre(this.id)
      .subscribe(data => {
        console.log(data)
        this.arbitre = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['arbitres']);
  }

}
