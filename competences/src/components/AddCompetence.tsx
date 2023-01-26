import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CompetenceType } from '../service/competence.type'
import { service } from '../service/service'

// export type AddCompetenceProps = {
//     ajoutComp: Function,
//     comps: CompetenceType[],
//     setComps: Function
// }

const AddCompetence = () => {
    const [comps, setComps] = useState<CompetenceType[]>([])
    const [newCompetence, setNewCompetence] = useState<CompetenceType>({
        id: 0,
        nom: "",
        description: ""
    })

    useEffect(() => {
        findAllCompetence()
    }, [])

    const findAllCompetence = (): void => {
        service.findAllCompetences().then(data => setComps(data))
    }

    const ajoutCompetence = (newComp: CompetenceType): void => {
        service.postCompetence(newComp).then(() => {
            findAllCompetence()
        })
    }

    const handleChangeNom = (event: any) => {
        setNewCompetence({ ...newCompetence, nom: event.target.value, })
    }

    const handleChangeDescription = (event: any) => {
        setNewCompetence({ ...newCompetence, description: event.target.value, })
    }

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
                    <NavLink to="/">
                        <IonButton onClick={handleClickSave}>Ajouter</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddCompetence