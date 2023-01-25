import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList } from '@ionic/react'
import { type } from 'os'
import React from 'react'
import { CompetenceType } from '../service/competence.type'

export type CompetenceProps = {
    comp: CompetenceType,
    supprimerComp: Function,
    handleClickEdit: Function

}

const Competence = (props: CompetenceProps) => {

    const supprimerComp = () => {
        props.supprimerComp(props.comp.id)
    }

    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{props.comp.nom}</IonCardTitle>
                    {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                </IonCardHeader>

                <IonCardContent>
                    {props.comp.description}
                </IonCardContent>
                <IonButton color="danger" onClick={() => supprimerComp()}>X</IonButton>
                <IonButton color="success" onClick={()=> props.handleClickEdit(props.comp.id)}>Modifier</IonButton>
            </IonCard>

        </>
    )
}

export default Competence