import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CompetenceType } from '../service/competence.type'
import { service } from '../service/competence.service'

const AddCompetence = () => {
    const [comps, setComps] = useState<CompetenceType[]>([])
    const [newCompetence, setNewCompetence] = useState<CompetenceType>({
        id: 0,
        nom: "",
        description: "",
        image: ""
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
     * Fonction qui fait appel au service competence pour ajouter une competence
     * @param newComp CompetenceType, competence à ajouter
     */
    const ajoutCompetence = (newComp: CompetenceType): void => {
        service.postCompetence(newComp).then(() => {
            findAllCompetence()
        })
    }

    /**
     * Fonction qui ajoute un nom de competence
     * @param event string, nom du competence à ajouter
     */
    const handleChangeNom = (event: any) => {
        setNewCompetence({ ...newCompetence, nom: event.target.value, })
    }

    /**
     * Fonction qui ajoute une description à la competence
     * @param event string, description de la competence à ajouter
     */
    const handleChangeDescription = (event: any) => {
        setNewCompetence({ ...newCompetence, description: event.target.value, })
    }

    /**
     * Fonction qui ajoute une image de competence
     * @param event string, image du competence à ajouter
     */
    const handleChangeImage = (event: any) => {
        setNewCompetence({ ...newCompetence, image: event.target.value, })
    }

    /**
     * fonction pour enregistrer la nouvelle competence dans la base de données 
     * en cliquant sur le bouton ajouter
     */
    const handleClickSave = (): void => {
        ajoutCompetence(newCompetence)
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Ajouter competence</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Nom du competence</IonLabel>
                        <IonInput type='text' maxlength={20} value={newCompetence.nom} onIonChange={(event: any) => handleChangeNom(event)}></IonInput>
                    </IonItem>

                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">la description du competence</IonLabel>
                        <IonInput type='text' maxlength={150} value={newCompetence.description} onIonChange={(event: any) =>
                            handleChangeDescription(event)}></IonInput>
                    </IonItem>

                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">la description du competence</IonLabel>
                        <IonInput type='text' maxlength={150} value={newCompetence.description} onIonChange={(event: any) =>
                            handleChangeImage(event)}></IonInput>
                    </IonItem>
                    <NavLink to="/">
                        <IonButton onClick={handleClickSave}>Ajouter</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddCompetence