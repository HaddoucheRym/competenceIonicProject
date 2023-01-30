import React, { useState } from 'react'
import { CompetenceType } from '../service/competence.type'
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'

export type EditeCompetenceProps = {
    comp: CompetenceType,
    modifComp: Function
}

const EditeCompetence = (props: EditeCompetenceProps) => {
    const [comp, setComp] = useState(props.comp)

    /**
     * Fonction qui utilise les props pour modofier une competence
     */
    const modiferComp = () => {
        props.modifComp(comp)
    }

    /**
     * Fonction pour modifier le nom de la competence
     * @param event string, nom de laa competence à modifier
     */
    const handleChangeNom = (event: any) => {
        setComp({ ...comp, nom: event.target.value, })
    }

    /**
     * Fonction pour modifier la description de la competence
     * @param event string, description de la competence à modifier
     */
    const handleChangeDescription = (event: any) => {
        setComp({ ...comp, description: event.target.value, })
    }

    /**
     * Fonction pour modifier l'image de la competence
     * @param event string, image de la competence à modifier
     */
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