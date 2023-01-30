import { CompetenceType } from "./competence.type"
import { UtilisateurType } from "./utilisateur.type"

const URL2: string = "http://localhost:3000/competences"

export class Service {

    /**
     * methode pour recperer  tous les utilisateurs
     * @returns liste de utilisateurs
     */
    findAllCompetences = (): Promise<CompetenceType[]> => {
        return fetch(URL2).then((res) => res.json())
    }

    /**
     * Methode pour recuperer une competence
     * @param id en numbere d'une competence a recuperer
     * @returns une competence
     */
    findCompetence = (id: any): Promise<CompetenceType> => {
        return fetch(`${URL2}/${id}`).then((res) => res.json())
    }

 
    /**
     * methode pour ajouter une competence
     * @param competence a ajouter
     * @returns la competence ajouter
     */
    postCompetence = (competence: CompetenceType): Promise<CompetenceType> => {
        return fetch(URL2, {
            method: "POST",
            body: JSON.stringify(competence),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    /**
     * Methode pour supprimer une competence
     * @param id de la competence a supprimer
     * @returns la competence supprimée
     */
    deleteCompetence = (id: number): any => {
        return fetch(`${URL2}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    

    /**
     * Methode pour modifier une competence
     * @param element de competence à modifier
     * @returns la competence modiffiée
     */
    putCompetence = (element: CompetenceType): any => {
        return fetch(`${URL2}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: { "Content-type": "Application/json" }
        }).then(res => res.json())
    }
  
}

export const service = Object.freeze(new Service)