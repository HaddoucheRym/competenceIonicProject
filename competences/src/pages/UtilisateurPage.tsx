import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UtilisateurListe from '../layaouts/UtilisateurListe'
import { personneservice } from '../service/personne.service'
import { UtilisateurType } from '../service/utilisateur.type'

const UtilisateurPage = () => {
    const [utilisateurs, setUtilisateurs] = useState<UtilisateurType[]>([])

    useEffect(() => {
        trouverTousUtilisateurs()
    }, [])

    const trouverTousUtilisateurs = (): void => {
        personneservice.findAllUtilisateurs().then(data => setUtilisateurs(data))
    }

    const supprimerUtilisateur = (id: number) => {
        personneservice.deleteUtilisateur(id).then(() => {
            trouverTousUtilisateurs()
        })
    }

    const ModifUtilisateur = (utilisateur: UtilisateurType) => {
        personneservice.putUtilisateur(utilisateur).then(() => {
            trouverTousUtilisateurs()
        })
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Liste de personnes</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Blank</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <UtilisateurListe utilisateurs={utilisateurs} supprimerUtilisateur={supprimerUtilisateur}
                    ModifUtilisateur={ModifUtilisateur}/>
                    <NavLink to="/ajoutUtilisateur" >
                        <IonButton >Nouvelle personne</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default UtilisateurPage