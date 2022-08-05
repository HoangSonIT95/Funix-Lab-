import React from 'react';
import {
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  Button,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  // xu ly khi submit form: console.log && alert state
  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // event.preventDefault();
  }
  render() {
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader>Submit Comment</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={values => this.handleSubmit(values)}>
          <Row className='form-group'>
            <Label htmlFor='rating' md={2}>
              Rating
            </Label>
            <Col md={10}>
              <Control.text
                model='.rating'
                id='rating'
                name='rating'
                placeholder='Rating'
                className='form-control'
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className='text-danger'
                model='.rating'
                show='touched'
                messages={{
                  required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less',
                }}
              />
            </Col>
          </Row>

          <Row className='form-group'>
            <Label htmlFor='Your Name' md={2}>
              First Name
            </Label>
            <Col md={10}>
              <Control.text
                model='.Your Name'
                id='Your Name'
                name='Your Name'
                placeholder='Your Name'
                className='form-control'
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className='text-danger'
                model='.Your Name'
                show='touched'
                messages={{
                  required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 15 characters or less',
                }}
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='comment' md={2}>
              Comment
            </Label>
            <Col md={10}>
              <Control.textarea
                model='.comment'
                id='comment'
                name='comment'
                rows='12'
                className='form-control'
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>;
  }
}

export default CommentForm;
