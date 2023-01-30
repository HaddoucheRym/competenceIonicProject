import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { CompetenceType } from '../service/competence.type'
import { service } from '../service/competence.service'
import { UtilisateurType } from '../service/utilisateur.type'
import { personneservice } from '../service/personne.service'
import { NiveauCompetence } from '../service/niveauCompetence.type'

const DetailCompetence = () => {
  const [comp, setComp] = useState<CompetenceType>()
  const { id } = useParams<any>();
  const [selectedCompId, setSelectedCompId] = useState(id);
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
   * Fonction qui afficher les personnes qui ont cette competence
   * @returns liste de personnes 
   */
  const utilisateursFiltre = (): any => {
    let filteredUsers: UtilisateurType[] = [];
    if (comp) {
      filteredUsers = [...filteredUsers, ...utilisateurs.filter((user) => user.competences.some((elem) => elem.nom === comp.nom))]
    }
    return filteredUsers;
  };

  /**
  * Mise à jour et recuperation d'une competence
  */
  useEffect(() => {
    touverCompetence()
  }, [selectedCompId])

  /**
  * Fonction qui fait appel au service competence pour affiche une competence
  */
  const touverCompetence = (): void => {
    service.findCompetence(selectedCompId).then(data => setComp(data))
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
            <img alt="Silhouette of mountains" src={comp?.image} />
            <IonCardHeader>
              <IonCardTitle>{comp?.nom}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {comp?.description}
            </IonCardContent>
          </IonCard>
          <h3>Personnes</h3>

          {utilisateursFiltre() && utilisateursFiltre().map((element: UtilisateurType) => {
            return (
              <IonList key={element.id}>
                <IonItem >
                  {element.nom} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {element.competences.map((elt: NiveauCompetence) => {

                    if (elt.nom === comp?.nom) {
                      return <p>{elt.niveau}</p>
                    }
                  }
                  )}
                </IonItem>
              </IonList>)
          }
          )}
        </IonContent>
      </IonPage>
    </>
  )
}

export default DetailCompetence