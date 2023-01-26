import { CompetenceType } from "./competence.type"
import { UtilisateurType } from "./utilisateur.type"


const URL: string = "http://localhost:3000/utilisateurs"
const URL2: string = "http://localhost:3000/competences"

export class Service {

    /**
     * methode de recuperation de toutes les cometences
     * @returns liste de competences
     */
    findAllUtilisateurs = (): Promise<UtilisateurType[]> => {
        return fetch(URL).then((res) => res.json())
    }

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
     * Methode pour recuperer un utilisateur
     * @param id en number de l'utilisateur a recuperer
     * @returns un utilisateur
     */
    findUtilisateur = (id: any): Promise<UtilisateurType> => {
        return fetch(`${URL}/${id}`).then((res) => res.json())
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
    * methode pour ajouter un utilisateur
    * @param utilisateur a ajouter
    * @returns l'utilisateur ajouté
    */
    postUtilisateur = (utilisateur: UtilisateurType): Promise<UtilisateurType> => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(utilisateur),
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
    * Methode pour supprimer un utilisateur
    * @param id de l'utilisateur a supprimer
    * @returns l'utilisateur supprimé
    */
    deleteUtilisateur = (id: number): any => {
        return fetch(`${URL}/${id}`, {
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

    /**
    * Methode pour modifier un utilisateur
    * @param element de l'utilisateur à modifier
    * @returns l'utilisateur modiffiée
    */
    putUtilisateur = (element: UtilisateurType): any => {
        return fetch(`${URL}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: { "Content-type": "Application/json" }
        }).then(res => res.json())
    }
}

export const service = Object.freeze(new Service)