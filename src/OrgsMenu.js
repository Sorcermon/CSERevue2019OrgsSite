import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './OrgsMenu.css'
import { NavLink } from 'react-router-dom'

class OrgsMenu extends Component {
  state = { activeItem: '' }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

  }
  render() {
    const { activeItem } = this.state

    return(
      <div className="OrgsMenu">
        <div className="ui centered grid">
          <div className="center aligned column">
            <Menu stackable inverted pointing secondary compact style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Menu.Item as={ NavLink } to='/socials' name='socials' active={activeItem === 'socials'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to='/webmin' name='webmin' active={activeItem === 'webmin'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/design" name='design' active={activeItem === 'design'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/costumes" name='costumes' active={activeItem === 'costumes'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/hospitality" name='hospitality' active={activeItem === 'hospitality'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/foh" name='Front of House' active={activeItem === 'Front of House'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/band" name='band' active={activeItem === 'band'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/promotions" name='promotions' active={activeItem === 'promotions'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/marketing" name='marketing' active={activeItem === 'marketing'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/videos" name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/scripts" name='scripts' active={activeItem === 'scripts'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/vocals" name='vocals' active={activeItem === 'vocals'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/choreos" name='choreos' active={activeItem === 'choreos'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/vos" name='voice overs' active={activeItem === 'voice overs'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/arrangements" name='arrangements' active={activeItem === 'arrangements'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/fx" name='Stage FX' active={activeItem === 'Stage FX'} onClick={this.handleItemClick} />
            </Menu>
          </div>
        </div>
      </div>
    );
  }

}

export default OrgsMenu
