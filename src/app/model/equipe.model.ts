import { League } from "./league.model";

export class Equipe {
    idEquipe? : number;
    nomEquipe? : string;
    paysEquipe?: string;
    
    dateFound? : Date ;
    league!: League;
    }