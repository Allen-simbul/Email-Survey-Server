import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Fragment>
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/">{this.props.auth.firstName}</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
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
