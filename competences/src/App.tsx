import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { logoIonic } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CompetencePage from './pages/CompetencePage';
import AddCompetence from './components/AddCompetence';
import DetailCompetence from './components/DetailCompetence';
import UtilisateurPage from './pages/UtilisateurPage';
import AddUtilisateur from './components/AddUtilisateur';
import DetailUtilisateur from './components/DetailUtilisateur';
import { calendar, personCircle, map, informationCircle, flash } from 'ionicons/icons'


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <CompetencePage />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/ajoutCompetence" component={AddCompetence} exact={true} />
            <Route path="/detailCompetence/:id" component={DetailCompetence} />
            <Route path="/utilisateurs" component={UtilisateurPage} />
            <Route path="/ajoutUtilisateur" component={AddUtilisateur} />
            <Route path="/detailUtilisateur/:id" component={DetailUtilisateur} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="/" href="/">
              <IonIcon icon={flash} />
              <IonLabel>Competeneces</IonLabel>
            </IonTabButton>
            <IonTabButton tab="utilisateurs" href="/utilisateurs">
              <IonIcon icon={personCircle} />
              <IonLabel>Personnes</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
