import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Orgs from './Orgs'
import OrgsMenu from './OrgsMenu'
import 'semantic-ui-css/semantic.min.css'
import { Header, Segment, Image } from 'semantic-ui-react'

const App = () => {
  return (
    <div className="App">
      <Segment secondary attached color='green' textAlign='center' style={{ minHeight: 50}} inverted >
        <Image src={ require('./orgspics/logo.png')} style={{ marginTop: 0, marginBottom: 0 }} size='tiny' inline />
        <Header style ={{marginBottom: 0}} color='black' size='huge'>2018 Orgs Head Role Descriptions</Header>
      </Segment>
      
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
