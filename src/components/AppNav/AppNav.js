import React, { Component } from 'react';

import Sections from '../../config/Sections.json'


class AppNav extends Component {
  createNavItems = () => {
    const navItems = Sections.map((navItem, index) => {
      return (
        <li className="nav-item" key={index}><a className="nav-link" href={`/${navItem.value}`}>{navItem.label}</a></li>
      );
    })
    return navItems
  }

  render() {
    return (
      <div>
        {/* <Navbar color="light" dark expand="lg">
          <ul className="nav navbar-nav">
            <NavItem><NavLink href="/">Castle Blackpaw</NavLink></NavItem>
            {this.props.user ? <li><Link to={'/add-project'}>Add Article</Link></li> : null}
            {this.props.user ? <li><Link to={'/logout'}>Log Out</Link></li> : <li><Link to={'/login'}>Log In</Link></li>}
            {this.createNavItems()}
          </ul> */}
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className="nav-link" href="/">Castle Blackpaw</a>
            </li>
            {this.createNavItems()}
            {this.props.user ? <li className="nav-item"><a className="nav-link active" href={'/logout'}>Log Out</a></li> : <li className="nav-item"><a className="nav-link" href={'/login'}>Log In</a></li>}
          </ul>
      </div>
    )
  }
}

export default AppNav;