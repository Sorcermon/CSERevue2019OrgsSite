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
        <div class="ui centered grid">
          <div class="center aligned column">
            <Menu stackable inverted pointing secondary compact>
              <Menu.Item as={ NavLink } to='/socials' name='socials' active={activeItem === 'socials'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to='/webmin' name='webmin' active={activeItem === 'webmin'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/design" name='design' active={activeItem === 'design'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/costumes" name='costumes' active={activeItem === 'costumes'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/wellbeing" name='wellbeing' active={activeItem === 'wellbeing'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/publicity" name='publicity' active={activeItem === 'publicity'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/foh" name='front of house' active={activeItem === 'front of house'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/band" name='band' active={activeItem === 'band'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/promotions" name='promotions' active={activeItem === 'promotions'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/videos" name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/scripts" name='scripts' active={activeItem === 'scripts'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/vocals" name='vocals' active={activeItem === 'vocals'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/choreos" name='choreos' active={activeItem === 'choreos'} onClick={this.handleItemClick} />
              <Menu.Item as={ NavLink } to="/vos" name='voice overs' active={activeItem === 'voice overs'} onClick={this.handleItemClick} />

            </Menu>
          </div>
        </div>
      </div>
    );
  }
  
}

export default OrgsMenu
