import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NiveauCompetence } from '../service/niveauCompetence.type';
import { service } from '../service/service';
import { UtilisateurType } from '../service/utilisateur.type'

const DetailUtilisateur = () => {
  const [personne, setPersonne] = useState<UtilisateurType>()
  const { id } = useParams<any>();
  const [selectedPerId, setSelectedPerId] = useState(id);

  useEffect(() => {
    trouvPersonne()
  }, [selectedPerId])

  const trouvPersonne = (): void => {
    service.findUtilisateur(selectedPerId).then(data =>
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
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
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
              <IonList>
                <IonItem key={index}>
                  {element.nom} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{element.niveau}
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