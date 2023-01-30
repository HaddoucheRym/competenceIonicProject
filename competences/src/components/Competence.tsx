import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList } from '@ionic/react'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CompetenceType } from '../service/competence.type'
import { personneservice } from '../service/personne.service'
import { UtilisateurType } from '../service/utilisateur.type'

export type CompetenceProps = {
    comp: CompetenceType,
    supprimerComp: Function,
    handleClickEdit: Function

}

const Competence = (props: CompetenceProps) => {
    const [utilisateurs, setUtilisateurs] = useState<UtilisateurType[]>([])

    useEffect(() => {
        trouverTousUtilisateurs()
    }, [])

    const trouverTousUtilisateurs = (): void => {
        personneservice.findAllUtilisateurs().then(data => setUtilisateurs(data))
    }
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



                <NavLink to={'/detailCompetence/' + props.comp.id}>

                    <IonButton color="secondary">Detail</IonButton>
                </NavLink>
                <IonButton color="danger" onClick={() => supprimerComp()}>X</IonButton>
                <IonButton color="success" onClick={() => props.handleClickEdit(props.comp.id)}>Modifier</IonButton>
            </IonCard>

        </>
    )
}

export default Competence