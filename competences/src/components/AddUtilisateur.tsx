import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CompetenceType } from '../service/competence.type'
import { NiveauCompetence } from '../service/niveauCompetence.type'
import { personneservice } from '../service/personne.service'
import { service } from '../service/competence.service'
import { UtilisateurType } from '../service/utilisateur.type'

const AddUtilisateur = () => {
    const [comps, setComps] = useState<CompetenceType[]>([])
    const [prsonnes, setPersonnes] = useState<UtilisateurType[]>([])
    const [compSave, setCompSave] = useState<CompetenceType[]>([])
    const [newPer, setNewPer] = useState<UtilisateurType>({
        id: 0,
        nom: "",
        date: "",
        email: "",
        telephone: "",
        competences: []
    })

    /**
    * Mise à jour et recuperation de la liste des competences
    */
    useEffect(() => {
        findAllCompetence()
    }, [])

    /**
    * fonction qui appelle le service competence pour afficher toutes les competences
    */
    const findAllCompetence = (): void => {
        service.findAllCompetences().then(data => setComps(data))
    }

    /**
     * Mise à jour et recuperation des personnes
     */
    useEffect(() => {
        trouverTousUtilisateurs()
    }, [])

    /**
     * fonction qui appelle le service personne pour afficher toutes les personnes
     */
    const trouverTousUtilisateurs = (): void => {
        personneservice.findAllUtilisateurs().then(data => setPersonnes(data))
    }

    /**
     * Fonction qui fait appel au service personne pour ajouter une personne
     * @param newPersonne utilisateurType, à ajouter
     */
    const ajoutPersonne = (newPersonne: UtilisateurType): void => {
        personneservice.postUtilisateur(newPersonne).then(() => {
            trouverTousUtilisateurs()
        })
    }

    /**
     * Fonction pour ajouter un nom a personne
     * @param event string, nom à ajouter
     */
    const handleChangeNom = (event: any) => {
        setNewPer({ ...newPer, nom: event.target.value, })
    }

    /**
     * Fonction pour ajouter une date a personne
     * @param event string,  date à ajouter
     */
    const handleChangeDate = (event: any) => {
        setNewPer({ ...newPer, date: event.target.value, })
    }

    /**
    * Fonction pour ajouter un email a personne
    * @param event string,  email à ajouter
    */
    const handleChangeEmail = (event: any) => {
        setNewPer({ ...newPer, email: event.target.value, })
    }

    /**
    * Fonction pour ajouter un telephone à personne
    * @param event string,  telephone à ajouter
    */
    const handleChangeTelephone = (event: any) => {
        setNewPer({ ...newPer, telephone: event.target.value, })
    }

    /**
    * Fonction pour ajouter un nom de competence dans un tableu de competences
    *  à personne
    * @param event string,  nom de competence à ajouter
    */
    const handleChangeCompetences = (event: any) => {
        let array: NiveauCompetence[] = []
        for (let i = 0; i < event.target.value.length; i++) {
            array.push({ nom: event.target.value[i], niveau: "" })
            console.log(array);
        }

        setNewPer({ ...newPer, competences: array })
    }

    /**
     * Fonction pour ajouter un niveau de competence a un tableau 
     * de competence de personne
     * @param event string, niveau de competence à ajouter
     * @param index number, index du nom de competence
     */
    const handleChangeNiveauCompetences = (event: any, index: number) => {
        let array: NiveauCompetence[] = newPer.competences;
        array[index].niveau = event.target.value;
        setNewPer({ ...newPer, competences: array })
    }

    /**
     * fonction pour enregistrer personne dans la base de données en cliquant
     * le bouton ajouter
     */
    const handleClickSave = (): void => {
        ajoutPersonne(newPer)
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Ajouter Personne</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Nom de la personne</IonLabel>
                        <IonInput type='text' maxlength={20} value={newPer.nom} onIonChange={(event: any) => handleChangeNom(event)}></IonInput>
                    </IonItem>

                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">la date de la personne</IonLabel>
                        <IonInput type='text' maxlength={150} value={newPer.date} onIonChange={(event: any) =>
                            handleChangeDate(event)}></IonInput>
                    </IonItem>

                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">l'email de la personne</IonLabel>
                        <IonInput type='text' maxlength={150} value={newPer.email} onIonChange={(event: any) =>
                            handleChangeEmail(event)}></IonInput>
                    </IonItem>

                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">le telephone de la personne</IonLabel>
                        <IonInput type='text' maxlength={150} value={newPer.telephone} onIonChange={(event: any) =>
                            handleChangeTelephone(event)}></IonInput>
                    </IonItem>

                    <IonList>
                        <IonItem>
                            <IonSelect placeholder="choisir les competences" multiple={true} onIonChange={(event: any) =>
                                handleChangeCompetences(event)}>
                                {comps.map((comp: CompetenceType, index: number) => (
                                    <IonSelectOption key={index} value={comp.nom}>{comp.nom}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </IonList>

                    {newPer.competences.map((comp: NiveauCompetence, index: number) => (
                        <IonList>
                            <IonItem key={index}>
                                {comp.nom}
                                <IonList  >
                                    <IonItem>
                                        <IonSelect placeholder="choisir le niveau" onIonChange={(event: any) =>
                                            handleChangeNiveauCompetences(event, index)}>
                                            <IonSelectOption value="Debutant">Debutant</IonSelectOption>
                                            <IonSelectOption value="Habitué">Habitué</IonSelectOption>
                                            <IonSelectOption value="Confirmé">Confirmé</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonList>
                            </IonItem>
                        </IonList>
                    ))}
                    <NavLink to="/utilisateurs">
                        <IonButton onClick={handleClickSave}>Ajouter</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddUtilisateur