import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Observable } from 'rxjs';

import { Arbitre } from 'src/app/common/arbitre';
import { Equipe } from 'src/app/common/equipe';
import { Matches } from 'src/app/common/matches';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  equipes: Observable<Equipe[]>;
  equipe: Equipe = new Equipe();

  matches: Observable<Matches[]>;
  joueur: Matches = new Matches();

  arbitres: Observable<Arbitre[]>;
  arbitre: Arbitre = new Arbitre();

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }
  private roles: string[];

  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username: string;
  ngOnInit() {

     this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
    this.userService.getPublicMatches().subscribe(data => {
      this.matches = data;
      console.log(data);
    })
    this.userService.getPublicEquipes().subscribe(data => {
      this.equipes = data;
      console.log(data);
    })
    this.userService.getPublicArbitre().subscribe(data => {
      this.arbitres= data;
      console.log(data);
    })
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
