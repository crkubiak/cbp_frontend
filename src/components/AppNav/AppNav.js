import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavLink } from 'reactstrap'
import Sections from '../../config/Sections.json'


class AppNav extends Component {
  createNavItems = () => {
    const navItems = Sections.map((navItem, index) => {
      return (
        <li key={index}><Link to={`/${navItem.value}`}>{navItem.label}</Link></li>
      );
    })
    return navItems
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          <ul className="nav navbar-nav">
            <NavItem><NavLink href="/">Castle Blackpaw</NavLink></NavItem>
            {this.props.user ? <li><Link to={'/add-project'}>Add Article</Link></li> : null}
            {this.props.user ? <li><Link to={'/logout'}>Log Out</Link></li> : <li><Link to={'/login'}>Log In</Link></li>}
            {this.createNavItems()}
          </ul>
        </Navbar>
      </div>
    )
  }
}

export default AppNav;