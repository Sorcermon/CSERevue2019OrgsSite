import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'

class OrgsHeader extends Component{

  render() {
    var image;
    if (this.props.orgsHeaderName === 'Socials') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/socials.png')} />
    } else if (this.props.orgsHeaderName === 'Webmin') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/webmin.png')} />
    } else if (this.props.orgsHeaderName === 'Design') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/design.png')} />
    } else if (this.props.orgsHeaderName === 'Costumes') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/costumes.png')} />
    } else if (this.props.orgsHeaderName === 'Wellbeing') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/wellbeing.png')} />
    } else if (this.props.orgsHeaderName === 'Publicity') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/publicity.png')} />
    } else if (this.props.orgsHeaderName === 'Front of House and Ticketing') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/foh.png')} />
    } else if (this.props.orgsHeaderName === 'Band') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/band.png')} />
    } else if (this.props.orgsHeaderName === 'Promotions') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/promotions.png')} />
    } else if (this.props.orgsHeaderName === 'Videos') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/videos.png')} />
    } else if (this.props.orgsHeaderName === 'Scripts') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/scripts.png')} />
    } else if (this.props.orgsHeaderName === 'Vocals') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/vocals.png')} />
    } else if (this.props.orgsHeaderName === 'Choreographers') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/choreos.png')} />
    } else if (this.props.orgsHeaderName === 'Voice Overs') {
      image = <Image inline verticalAlign='middle' src={ require('./emojipics/vos.png')} />
    }

    return(
      <Header textAlign='center' as='h1'>
        {image}
        {' '}{this.props.orgsHeaderName}{' '}
        {image}
      </Header>
    )
  }
}

export default OrgsHeader
