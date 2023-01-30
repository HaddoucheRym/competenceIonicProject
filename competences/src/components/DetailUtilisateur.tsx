import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NiveauCompetence } from '../service/niveauCompetence.type';
import { personneservice } from '../service/personne.service';
import { service } from '../service/competence.service';
import { UtilisateurType } from '../service/utilisateur.type'

const DetailUtilisateur = () => {
  const [personne, setPersonne] = useState<UtilisateurType>()
  const { id } = useParams<any>();
  const [selectedPerId, setSelectedPerId] = useState(id);

  /**
   * Mise à jour et recuperation d'une personne
   */
  useEffect(() => {
    trouvPersonne()
  }, [selectedPerId])

  /**
   * Fonction qui fait appel au service personne pour affiche une personne
   */
  const trouvPersonne = (): void => {
    personneservice.findUtilisateur(selectedPerId).then(data =>
      setPersonne(data))
  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/utilisateurs"></IonBackButton>
            </IonButtons>
            <IonTitle>Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <img alt="Silhouette of mountains" src="https://media.licdn.com/dms/image/C4D22AQFQWGiDsxQ9uA/feedshare-shrink_2048_1536/0/1674460434778?e=1677715200&v=beta&t=l8fHdUtQBhhnz3xhgdPhvrAvgf3CCFbUBb8rKDasgPQ" />
            <IonCardHeader>
              <IonCardTitle>{personne?.nom}</IonCardTitle>
              <IonCardSubtitle>{personne?.date}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {personne?.email} <br />
              {personne?.telephone}
            </IonCardContent>
          </IonCard>
          <h3>Liste de competences</h3>
          <div>
            {personne?.competences.map((element: NiveauCompetence, index: number) =>
              <IonList key={index}>
                <IonItem >
                  {element.nom} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;{element.niveau}
                </IonItem>
              </IonList>
            )}
          </div>

        </IonContent>

      </IonPage>
    </>
  )
}

export default DetailUtilisateur