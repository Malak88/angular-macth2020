import { Arbitre } from './arbitre';
import { Equipe } from './equipe';


export class Matches {
    id:number;
	name:string;
	date:Date;
	stade:string;
	arbitres:Arbitre[];
	equipes:Equipe[];
    
    constructor(){}

}
