import React from 'react';

const Modal = React.createClass( {
  render( ) {
    return (
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
    );
  }
} );

export default Modal;
