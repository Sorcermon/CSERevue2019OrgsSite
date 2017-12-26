import React, { Component } from 'react';
import orgsDescriptions from './orgsDescriptions' 

class Orgs extends Component {
  render() {
    const orgsDescription = orgsDescriptions.filter((orgsDescription) => orgsDescription.orgsName === this.props.orgName)[0];
    return(
      <div className="orgsDescription">
        <br />
        <h1>{this.props.orgName}</h1>
        {orgsDescription.description1}
        <ul>
          {orgsDescription.responsibilities.map(function(responsibility, index){
            return <li key={ index }>{responsibility}</li>
          })}
        </ul>
        {orgsDescription.description2}
      </div>
    );
  }
}

export default Orgs 

