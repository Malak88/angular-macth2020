import { Equipe } from 'src/app/common/equipe';
import { EquipesService } from 'src/app/services/equipes.service';
import { Matches } from 'src/app/common/matches';
import { MatchesService } from 'src/app/services/matches.service';



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  equipe: Equipe = new Equipe();
  xform: FormGroup;
  submitted = false;

  constructor(private equipeService: EquipesService,private matchesService: MatchesService,
     private router:Router) { }

     matches: Observable<Matches[]>;

  ngOnInit(): void {

    this.submitted = false;
    this.matchesService.getMatchesList().subscribe(data => {
      this.matches = data;
      console.log(data);
    });
  }

  equipesaveform = new FormGroup({   
    name: new FormControl('', [Validators.required,Validators.minLength(4)]),
   country: new FormControl('', [Validators.required,Validators.minLength(4)]),
   matche: new FormControl()
   });

   saveequipe() {
  
    this.equipe = new Equipe();
    this.equipe.name = this.name.value;
    this.equipe.country = this.country.value;

    this.equipe.matches=new Matches();
    this.equipe.matches.id=this.matche.value;

    this.submitted = true;
    this.save();
  }
  get name() {
    return this.equipesaveform.get('name');
  }
  get country() {
    return this.equipesaveform.get('country');
  }
  
  get matche() {
    return this.equipesaveform.get('matche');
  }

  save() {
    this.equipeService.createEquipe(this.equipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.equipe = new Equipe();
    this.gotoList();
  }

  addequipeForm() {
    this.submitted = false;
    this.equipesaveform.reset();
  } 

  gotoList() {
    this.router.navigate(['/equipes']);
  
  }
  list() {
    this.router.navigate(['/equipes']);
  
  }

}
