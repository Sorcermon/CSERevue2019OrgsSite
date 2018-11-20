import React, { Component } from 'react'
import orgsDescriptions from './orgsDescriptions' 
import { Button, Container, Image } from 'semantic-ui-react'
import OrgsHeader from './OrgsHeader'

class Orgs extends Component {

  // Have a different button for creative and non creative orgs
  apply = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeuBf5cixesycwOXg6UqL4DhvRyk57aYDbCtIqMnzEAuRgaPQ/viewform?usp=sf_link', '_blank');
  }

  applyCreative() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeMT3r7t4G5-wjxM12KGN3-s6dtvBuM6_YFe0kBTzCS0sgDlQ/viewform?usp=sf_link', '_blank');
  }

  render() {
    const orgsDescription = orgsDescriptions.filter((orgsDescription) => orgsDescription.orgsName === this.props.orgName)[0];
    return (
      <div className="Orgs">
        <Container text style={{ marginTop: '3em' }}>
            <OrgsHeader orgsHeaderName={orgsDescription.orgsHeaderName} />
            {orgsDescription.description1}
            <ul>
              {orgsDescription.responsibilities.map(function(responsibility, index){
                return <li key={ index }>{responsibility}</li>
              })}
            </ul>
            {
              orgsDescription.responsibilitiesSubMenu ? (
                <ul style={{ marginTop: -16 }}>
                  <ul>
                    {
                      orgsDescription.responsibilitiesSubMenu.map((responsibility, index) => {
                        return <li key={ index }>{responsibility}</li>;
                      })
                    }
                  </ul>
                </ul>
              ) : ''
            }
            {orgsDescription.description2}
            {
              orgsDescription.responsibilities2 ? (
                <ul>
                  {
                    orgsDescription.responsibilities2.map((responsibility, index) => {
                      return <li key={ index }>{responsibility}</li>;
                    })
                  }
                </ul>
              ) : ''
            }
        </Container>
        <p />
        <Container textAlign='center'>
          <Button
            onClick={() => {
              if (orgsDescription.creative) {
                this.applyCreative();
              } else {
                this.apply();
              }
            }}
            circular
            color='green'
            size='huge'
          >
            Apply Now
          </Button>
          <p />
          <Image.Group size='medium'>
            {orgsDescription.images.map(function(image, index){
                return <Image src={ image } key={index} circular  />
            })}
          </Image.Group>
        </Container>
      </div>
    );
  }
}

export default Orgs 
