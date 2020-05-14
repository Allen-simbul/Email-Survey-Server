import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
          </div>
        );
      default:
        return (
          <div>
            <li>{this.props.auth.firstName}</li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  }

  renderNavBar() {
    return (
      <nav className="#ef6c00 orange darken-3">
        <div className="nav-wrapper">
          <Link
            className="left brand-logo"
            to={this.props.auth ? '/surveys' : '/'}
          >
            Survely
          </Link>
          <a
            href="#"
            className="right sidenav-trigger"
            data-target="mobile-nav"
          >
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }

  render() {
    return <div>{this.renderNavBar()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
