import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import classNames from 'classnames';

import CartItem from './CartItem';

//TransactionButtons
const TransactionButtons = React.createClass( {
  // Component's initial state
  getInitialState ( ) {
    return {
      showCart: false,
      showModal: false,
      username: '',
      isValidUsername: true,
      email: '',
      isValidEmail: true,
      comments:'',
      isValidComment: true
    };
  },
  // Open the modal form
  open ( ) {
    this.setState({ showModal: true });
  },
  // Close the modal form
  close ( ) {
    this.setState({
      showModal: false,
      isValidUsername: true,
      isValidEmail: true,
      isValidComment: true });
    this.setState(this.getInitialState());
  },
  // Submit the selected items
  handleSubmit ( ) {
    this.setState({
      showModal: false,
      isValidUsername: true,
      isValidEmail: true,
      isValidComment: true });
    // call the complete transaction action creator
    this.props.completeTransaction();
    this.setState(this.getInitialState());
  },
  // Toggle the cart
  handleOnClick ( ) {
    this.setState({ showCart: !this.state.showCart });
  },
  // Username validation
  handleUsernameValidation ( e ) {
    const username = e.target.value;
    const usernamePattern = /^(?!.*([A-Za-z0-9])\1{1})[A-Za-z0-9]{5,}$/;
    const isValidUsername = usernamePattern.test(username);
    this.setState({ username,
                    isValidUsername });
  },
  // Email validation
  handleEmailValidation ( e ) {
    const email = e.target.value;
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailPattern.test(email);
    this.setState({ email,
                    isValidEmail });
  },
  // Comments validation
  handleCommentsValidation ( e ) {
    const comments = e.target.value;
    this.setState({ comments,
                    isValidComment: ( ( comments.length >= 10 ) ? true : false )
                  });
  },
  // Template for the modal fields
  FieldGroup({ id, label, placeholder, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} placeholder={placeholder} />
      </FormGroup>
    );
  },
  render( ) {
    const {cart} = this.props;
    const { username, email, comments, isValidUsername, isValidEmail, isValidComment } = this.state;
    const isDisabled = (username.length && email.length && comments.length && isValidUsername && isValidEmail && isValidComment) ? false : true;

    // Toggle 'error' class on the modal form's fields depending on the validation's status
    const validateUsernameInput = classNames( {
      'error': !this.state.isValidUsername
    } );
    const validateEmailInput = classNames( {
      'error': !this.state.isValidEmail
    } );
    const validateCommentsInput = classNames( {
      'error': !this.state.isValidComment
    } );

    return (
      <div>
        <button className="btn btn-lg btn-primary" onClick={this.handleOnClick}>
          <span className="glyphicon glyphicon-shopping-cart"></span>Cart&nbsp;
          { cart.length ? <span className="badge">{cart.length}</span> : false }
        </button>&nbsp;
        <span>
          <button className="btn btn-lg btn-success" onClick={this.open} disabled={!cart.length}>Complete</button>
        </span>
        {this.state.showCart ?  ( <div>
                                    { !this.props.posts.isFetching ? this.props.cart.map( ( item, i ) => <CartItem {...this.props} key={item.id} item={item} /> ) : true }
                                  </div> ) : null}
                                  <div>
          {/* Modal form with react-bootstrap */}
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Order form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <this.FieldGroup
                  id="formControlsUsername"
                  label="Username"
                  type="text"
                  placeholder="superman"
                  className={validateUsernameInput}
                  onChange={this.handleUsernameValidation}
                />
                <this.FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Email address"
                  placeholder="john.doe@doe.com"
                  className={validateEmailInput}
                  onChange={this.handleEmailValidation}
                />
                <this.FieldGroup
                  id="formControlsComments"
                  type="textarea"
                  label="Comments"
                  placeholder="Write a short review of the product(s)..."
                  className={validateCommentsInput}
                  onChange={this.handleCommentsValidation}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button bsClass="btn btn-success" onClick={this.handleSubmit} disabled={isDisabled}>Submit order</Button>
              <Button bsClass="btn btn-warning" onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
          {/* Modal form */}
        </div>
      </div>
    );
  }
} );

export default TransactionButtons;
