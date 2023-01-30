import React, { useState } from 'react'
import { CompetenceType } from '../service/competence.type'
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'

export type EditeCompetenceProps = {
    comp: CompetenceType,
    modifComp: Function
}

const EditeCompetence = (props: EditeCompetenceProps) => {
    const [comp, setComp] = useState(props.comp)

    const modiferComp = () => {
        props.modifComp(comp)
    }

    const handleChangeNom = (event: any) => {
        setComp({ ...comp, nom: event.target.value, })
    }

    const handleChangeDescription = (event: any) => {
        setComp({ ...comp, description: event.target.value, })
    }

    const handleChangeImage = (event: any) => {
        setComp({ ...comp, image: event.target.value, })
    }

    return (
        <>
            <IonItem counter={true}>
                <IonLabel position="floating">Nom du competence</IonLabel>
                <IonInput type='text' maxlength={20} value={comp.nom} onIonChange={(event: any) => handleChangeNom(event)}></IonInput>
            </IonItem>

            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">la description du competence</IonLabel>
                <IonInput type='text' maxlength={150} value={comp.description} onIonChange={(event: any) =>
                    handleChangeDescription(event)}></IonInput>
            </IonItem>

            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">l'image de la competence</IonLabel>
                <IonInput type='text' maxlength={150} value={comp.image} onIonChange={(event: any) =>
                    handleChangeImage(event)}></IonInput>
            </IonItem>

            <IonButton color="success" onClick={() => modiferComp()}>Valider</IonButton>
        </>
    )
}

export default EditeCompetence