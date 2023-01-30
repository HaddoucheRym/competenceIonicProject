import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { service } from '../service/competence.service'
import { CompetenceType } from '../service/competence.type'
import { NiveauCompetence } from '../service/niveauCompetence.type'
import { UtilisateurType } from '../service/utilisateur.type'

export type EditeUtilisateurProps = {
    utilisateur: UtilisateurType,
    modifUtilisateur: Function
}

const EditeUtilisateur = (props: EditeUtilisateurProps) => {
    const [comps, setComps] = useState<CompetenceType[]>([])
    const [utili, setUtili] = useState(props.utilisateur)

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
     * Fonction qui utilise les props pour modifier une personne
     */
    const modifUtili = () => {
        props.modifUtilisateur(utili)
    }

    /**
     * Fonction qui modifie le nom de la personne
     * @param event string, nom de la personne à modifier
     */
    const handleChangeNom = (event: any) => {
        setUtili({ ...utili, nom: event.target.value, })
    }

    /**
     * Fonction qui modifie la date de la personne
     * @param event string, date de la personne à modifier
     */
    const handleChangeDate = (event: any) => {
        setUtili({ ...utili, date: event.target.value, })
    }

    /**
     * Fonction qui modifie le email de la personne
     * @param event string, email de la personne à modifier
     */
    const handleChangeEmail = (event: any) => {
        setUtili({ ...utili, email: event.target.value, })
    }

    /**
     * Fonction qui modifie le telephone de la personne
     * @param event string, telephone de la personne à modifier
     */
    const handleChangeTelephone = (event: any) => {
        setUtili({ ...utili, telephone: event.target.value, })
    }

    /**
     * Fonction qui modifie le nom du competence de la personne
     * @param event string, nom du competence de la personne à modifier
     */
    const handleChangeCompetences = (event: any) => {
        let array: NiveauCompetence[] = []
        for (let i = 0; i < event.target.value.length; i++) {
            array.push({ nom: event.target.value[i], niveau: "" })
            console.log(array);
        }

        setUtili({ ...utili, competences: array })
    }

    /**
     * Fonction qui modifie le niveau du competence de la personne
     * @param event string: niveau du competence de la personne à modifier
     * @param index number, l'index du nom de la competence
     */
    const handleChangeNiveauCompetences = (event: any, index: number) => {
        let array: NiveauCompetence[] = utili.competences;
        array[index].niveau = event.target.value;
        setUtili({ ...utili, competences: array })
    }

    return (
        <>
            <IonItem counter={true}>
                <IonLabel position="floating">le nom de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={20} value={utili.nom} onIonChange={(event: any) => handleChangeNom(event)}></IonInput>
            </IonItem>

            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">la date de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={150} value={utili.date} onIonChange={(event: any) =>
                    handleChangeDate(event)}></IonInput>
            </IonItem>
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">le mail de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={150} value={utili.email} onIonChange={(event: any) =>
                    handleChangeEmail(event)}></IonInput>
            </IonItem>

            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">le telephone de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={150} value={utili.telephone} onIonChange={(event: any) =>
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

            {utili.competences.map((comp: NiveauCompetence, index: number) => (
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

            <IonButton color="success" onClick={() => modifUtili()}>Valider</IonButton>
        </>
    )
}

export default EditeUtilisateur