import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { UtilisateurType } from '../service/utilisateur.type'

export type UtilisateurProps = {
    utilisateur: UtilisateurType,
    suprrimUtilisateur: Function,
    handleClickEdit: Function
}

const Utilisateur = (props: UtilisateurProps) => {

    const suprimerUtil = () => {
        props.suprrimUtilisateur(props.utilisateur.id)
    }

    return (
        <>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{props.utilisateur.nom}</IonCardTitle>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    </IonCardHeader>

                    <IonCardContent>
                        {props.utilisateur.date}
                    </IonCardContent>
            <NavLink to={'/detailutilisateur/' + props.utilisateur.id}>
                    <IonButton color="secondary">Detail</IonButton>
            </NavLink>
                    <IonButton color="danger" onClick={() => suprimerUtil()}>X</IonButton>
                    <IonButton color="success" onClick={() => props.handleClickEdit(props.utilisateur.id)}>Modifier</IonButton>
                </IonCard>

        </>
    )
}

export default Utilisateur