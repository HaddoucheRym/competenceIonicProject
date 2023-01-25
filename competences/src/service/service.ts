import { CompetenceType } from "./competence.type"
import { UtilisateurType } from "./utilisateur.type"


const URL: string = "http://localhost:3000/utilisateur"
const URL2: string = "http://localhost:3000/competence"

export class Service {

    // findAllUtilisateurs =  (): Promise<UtilisateurType[]> => {
    //     const res = await fetch(URL)
    //     return await res.json()
    // }

    findAllCompetences = async (): Promise<CompetenceType[]> => {
        return fetch(URL2).then((res)=> res.json())
    }

    postCompetence = (competence: CompetenceType): Promise<CompetenceType> => {
        return fetch(URL2, { 
            method: "POST",
            body :JSON.stringify(competence),
            headers: {"Content-type": "Application/json"}
        }).then((res) => res.json())
    }

    deleteCompetence = (id : number): any => {
        return fetch(`${URL2}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    putCompetence = (element:CompetenceType) : any => {
        return fetch(`${URL2}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: {"Content-type": "Application/json"}
        }).then(res => res.json())
    }
}

export const service = Object.freeze( new Service)