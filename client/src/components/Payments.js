import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactStripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <ReactStripeCheckout
        name="Survely"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add Credits</button>
      </ReactStripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
