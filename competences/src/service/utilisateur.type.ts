import { type } from "os"
import { CompetenceType } from "./competence.type"
import { NiveauCompetence } from "./niveauCompetence.type"

export type UtilisateurType =
    {
        id: number,
        nom: string,
        date: string,
        email: string,
        telephone: string,
        competences: NiveauCompetence[],
       
    }