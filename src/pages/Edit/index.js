import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import { Form, SubmitButton, BlockOne, BlockTwo } from './styles';

export default class Edit extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        todoListId: PropTypes.number,
      }),
    }).isRequired,
  };

  state = {
    todoItem: {},
  };

  async componentDidMount() {
    const { match } = this.props;

    const todoListId = match.params.id;

    const response = await api.get(`/todos/${todoListId}`);

    this.setState({ todoItem: response.data });
  }

  /* handleSubmit = async e =>{
    e.preventDefault();

    const response = await api.put(`/todos/${todoListId}`);
    const
  } */

  render() {
    const { todoItem } = this.state;
    return (
      <Container>
        <Wrapper>
          <BlockOne>
            <h1>ToDo List!</h1>
            <p>
              Welcome to ToDo Lista made in React JS created by Rodrigo Urbano
            </p>
          </BlockOne>
          <BlockTwo>
            <h1>Edit ToDo</h1>
            <Form onSubmit={this.handleSubmit}>
              <input type="text" className="title" value={todoItem.title} />
              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
              <SubmitButton>Edit</SubmitButton>
            </Form>
          </BlockTwo>
        </Wrapper>
      </Container>
    );
  }
}
