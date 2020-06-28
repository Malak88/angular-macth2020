import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajouter-matches',
  templateUrl: './ajouter-matches.component.html',
  styleUrls: ['./ajouter-matches.component.css']
})
export class AjouterMatchesComponent implements OnInit {

  matches: Matches = new Matches();
  xform: FormGroup;
  submitted = false;

  constructor(private matchesService: MatchesService,
    private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
  }

  matchessaveform = new FormGroup({   
    name: new FormControl('', [Validators.required,Validators.minLength(4)]),
    date: new FormControl('', Validators.required),
    stade: new FormControl('', [Validators.required,Validators.minLength(4)])
   });
   savematches() {
  
    this.matches = new Matches();
    this.matches.name = this.name.value;
    this.matches.date = this.date.value;
    this.matches.stade = this.stade.value;

    this.submitted = true;
    this.save();
  }
  get name() {
    return this.matchessaveform.get('name');
  }
  get date() {
    return this.matchessaveform.get('date');
  }
  
  get stade() {
    return this.matchessaveform.get('stade');
  }

  save() {
    this.matchesService.createMatches(this.matches)
      .subscribe(data => console.log(data), error => console.log(error));
    this.matches = new Matches();
    this.gotoList();
  }

  addmatchesForm() {
    this.submitted = false;
    this.matchessaveform.reset();
  } 

  gotoList() {
    this.router.navigate(['/matches']);
  
  }
  list() {
    this.router.navigate(['/matches']);
  
  }

}
