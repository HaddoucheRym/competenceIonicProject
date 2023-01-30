import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AddCompetence from '../components/AddCompetence'
import CompetenceList from '../layaouts/CompetenceList'
import { CompetenceType } from '../service/competence.type'
import { service } from '../service/competence.service'

const CompetencePage = () => {
    const [comps, setComps] = useState<CompetenceType[]>([])

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
     * Focntion qui appelle le service competence pour supprimer une competence
     * @param id number, de la competence à supprimer
     */
    const suprimeCompetence = (id: number) => {
        service.deleteCompetence(id).then(() => {
            findAllCompetence()
        })
    }

    /**
     * Fonction qui appelle le service competence pour modifier une competence
     * @param competence CompetenceType, à modifier
     */
    const modifCompetence = (competence: CompetenceType) => {
        service.putCompetence(competence).then(() => {
            findAllCompetence()
        })
    }


    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Liste des competences</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Blank</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <CompetenceList comps={comps} supprimeComp={suprimeCompetence} modifComp={modifCompetence} />
                    {/* <AddCompetence ajoutComp={ajoutCompetence} comps={comps} setComps={setComps} /> */}
                    <NavLink to="/ajoutCompetence" >
                        <IonButton >Nouvelle competence</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default CompetencePage