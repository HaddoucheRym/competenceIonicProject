import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AddCompetence from '../components/AddCompetence'
import CompetenceList from '../layaouts/CompetenceList'
import { CompetenceType } from '../service/competence.type'
import { service } from '../service/service'

const CompetencePage = () => {
    const [comps, setComps] = useState<CompetenceType[]>([])

    useEffect(() => {
        findAllCompetence()
    }, [])

    const findAllCompetence = (): void => {
        service.findAllCompetences().then(data => setComps(data))
    }

    // const ajoutCompetence = (newComp: CompetenceType): void => {
    //     service.postCompetence(newComp).then(() => {
    //         findAllCompetence()
    //     })
    // }

    const suprimeCompetence = (id: number) => {
        service.deleteCompetence(id).then(() => {
            findAllCompetence()
        })
    }

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
                        <IonTitle>Competences</IonTitle>
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
                    <IonButton >Ajouter</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default CompetencePage