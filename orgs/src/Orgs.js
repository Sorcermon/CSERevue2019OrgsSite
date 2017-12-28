import React, { Component } from 'react'
import orgsDescriptions from './orgsDescriptions' 
import { Container } from 'semantic-ui-react'
import OrgsHeader from './OrgsHeader'

class Orgs extends Component {
  render() {
    const orgsDescription = orgsDescriptions.filter((orgsDescription) => orgsDescription.orgsName === this.props.orgName)[0];
    return(
      <div className="Orgs">
        <Container text style={{ marginTop: '3em' }}>
          <OrgsHeader orgsHeaderName={orgsDescription.orgsHeaderName} />
          {orgsDescription.description1}
          <ul>
            {orgsDescription.responsibilities.map(function(responsibility, index){
              return <li key={ index }>{responsibility}</li>
            })}
          </ul>
          {orgsDescription.description2}
        </Container>
      </div>
    );
  }
}

export default Orgs 

