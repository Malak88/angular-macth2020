import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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

import { ArbitresService } from './services/arbitres.service';
import { MatchesService } from './services/matches.service';
import { EquipesService } from './services/equipes.service';

import { LoginComponent } from './components/authentif/login/login.component';
import { RegisterComponent } from './components/authentif/register/register.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';






@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavbarComponent,
    Page404Component,

    ArbitresComponent,
    AjouterArbitreComponent,
    UpdateArbitreComponent,
    ArbitreDetailsComponent,
    
    MatchesComponent,
    AjouterMatchesComponent,
    MatchesDetailsComponent,
    UpdateMatchesComponent,
    
    EquipesComponent,
    AddEquipeComponent,
    EquipeDetailsComponent,
    UpdateEquipeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ArbitresService,
    MatchesService,
    EquipesService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
