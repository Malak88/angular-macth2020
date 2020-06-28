import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/authentif/login/login.component';
import { RegisterComponent} from './components/authentif/register/register.component';
import { Page404Component } from './components/page404/page404.component';

import { ArbitresComponent } from './components/arbitre/arbitres/arbitres.component';
import { AjouterArbitreComponent } from './components/arbitre/ajouter-arbitre/ajouter-arbitre.component';
import { UpdateArbitreComponent } from './components/arbitre/update-arbitre/update-arbitre.component';
import { ArbitreDetailsComponent } from './components/arbitre/arbitre-details/arbitre-details.component';

import { MatchesComponent } from './components/matches/matches/matches.component';
import { AjouterMatchesComponent } from './components/matches/ajouter-matches/ajouter-matches.component';
import { MatchesDetailsComponent } from './components/matches/matches-details/matches-details.component';
import { UpdateMatchesComponent } from './components/matches/update-matches/update-matches.component';

import { EquipesComponent } from './components/equipe/equipes/equipes.component';
import { AddEquipeComponent } from './components/equipe/add-equipe/add-equipe.component';
import { EquipeDetailsComponent } from './components/equipe/equipe-details/equipe-details.component';
import { UpdateEquipeComponent } from './components/equipe/update-equipe/update-equipe.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  { 
    path: 'login',
     component: LoginComponent 
  },
  { 
    path: 'register',
     component: RegisterComponent 
  },
  {
    path:'arbitres',
    component:ArbitresComponent
  },
  {
    path:'addArbitre',
    component:AjouterArbitreComponent
  },
  {
    path:'updateArbitre/:id',
    component:UpdateArbitreComponent
  },
  {
    path:'arbitreDetails/:id',
    component:ArbitreDetailsComponent
  },
  {
    path:'matches',
    component:MatchesComponent
  },
  {
    path:'addMatches',
    component:AjouterMatchesComponent
  },
   {
    path:'updateMatches/:id',
    component:UpdateMatchesComponent
  },
  {
    path:'matchesDetails/:id',
    component:MatchesDetailsComponent
  },
  {
    path:'equipes',
    component:EquipesComponent
  },
  {
    path:'addEquipe',
    component:AddEquipeComponent
  },
   {
    path:'updateEquipe/:id',
    component:UpdateEquipeComponent
  },
  {
    path:'EquipeDetails/:id',
    component:EquipeDetailsComponent
  },
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
