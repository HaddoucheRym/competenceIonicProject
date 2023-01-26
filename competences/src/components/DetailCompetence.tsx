import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { CompetenceType } from '../service/competence.type'
import { service } from '../service/service'

const DetailCompetence = () => {
  const [comp, setComp] = useState<CompetenceType>()
  const { id } = useParams<any>();
  const [selectedCompId, setSelectedCompId] = useState(id);

  useEffect(() => {
    touverCompetence()
  }, [selectedCompId])

  const touverCompetence = (): void => {
    service.findCompetence(selectedCompId).then(data => setComp(data))
    console.log();

  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/"></IonBackButton>
            </IonButtons>
            <IonTitle>Detail</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
              <IonCardTitle>{comp?.nom}</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {comp?.description}
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  )
}

export default DetailCompetence