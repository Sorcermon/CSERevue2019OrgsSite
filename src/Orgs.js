import React, { Component } from 'react'
import orgsDescriptions from './orgsDescriptions' 
import { Button, Container, Image } from 'semantic-ui-react'
import OrgsHeader from './OrgsHeader'

class Orgs extends Component {

  apply = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeCDeFyoBL_rEpWZZ-lTfmQWpk4bjnN3HP2kcCeUaKYMHnvGw/viewform?usp=sf_link', '_blank');
  }

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
      <p />
      <Container textAlign='center'>
        <Button onClick={this.apply} circular color='green' size='huge'>Apply Now</Button>
        <p />
        <Image.Group size='medium'>
          {orgsDescription.images.map(function(image, index){
              return <Image src={ image } circular  />
          })}
        </Image.Group>
      </Container>

        
      </div>
    );
  }
}

export default Orgs 

