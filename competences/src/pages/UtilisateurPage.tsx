import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UtilisateurListe from '../layaouts/UtilisateurListe'
import { personneservice } from '../service/personne.service'
import { UtilisateurType } from '../service/utilisateur.type'

const UtilisateurPage = () => {
    const [utilisateurs, setUtilisateurs] = useState<UtilisateurType[]>([])

    /**
     * Mise à jour et recuperation des personnes
     */
    useEffect(() => {
        trouverTousUtilisateurs()
    }, [])

    /**
     * fonction qui appelle le service personne pour afficher toutes les personnes
     */
    const trouverTousUtilisateurs = (): void => {
        personneservice.findAllUtilisateurs().then(data => setUtilisateurs(data))
    }

    /**
     * focntion qui appelle le service personne pour supprimer une personne
     * @param id number, de la personne à supprimer
     */
    const supprimerUtilisateur = (id: number) => {
        personneservice.deleteUtilisateur(id).then(() => {
            trouverTousUtilisateurs()
        })
    }

    /**
     * fonction qui appelle le service de personne pour modifier les information
     * du personne
     * @param utilisateur UtilisateurType, a modifier
     */
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