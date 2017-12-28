import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Orgs from './Orgs'
import OrgsMenu from './OrgsMenu'
import './Banner.css'
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

const App = () => {
  return (
    <div className="App">
      <div className="Banner">
        <Header size='huge' textAlign='center'>CSE Revue 2018 Orgs Head Role Descriptions</Header>
      </div>
      
      <BrowserRouter>
        <div className="content">
          <OrgsMenu />

          <Route exact path="/" render={() => <Orgs orgName="socials" />} />
          <Route path="/socials" render={() => <Orgs orgName="socials" />} />
          <Route path="/webmin" render={() => <Orgs orgName="webmin" />} />
          <Route path="/design" render={() => <Orgs orgName="design" />} />
          <Route path="/costumes" render={() => <Orgs orgName="costumes" />} />
          <Route path="/wellbeing" render={() => <Orgs orgName="wellbeing" />} />
          <Route path="/publicity" render={() => <Orgs orgName="publicity" />} />
          <Route path="/foh" render={() => <Orgs orgName="foh" />} />
          <Route path="/band" render={() => <Orgs orgName="band" />} />
          <Route path="/promotions" render={() => <Orgs orgName="promotions" />} />
          <Route path="/videos" render={() => <Orgs orgName="videos" />} />
          <Route path="/scripts" render={() => <Orgs orgName="scripts" />} />
          <Route path="/vocals" render={() => <Orgs orgName="vocals" />} />
          <Route path="/choreos" render={() => <Orgs orgName="choreos" />} />
          <Route path="/vos" render={() => <Orgs orgName="vos" />} />

        </div>
      </BrowserRouter>

    </div>
  );
};

export default App
