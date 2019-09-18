import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import { BlockOne, BlockTwo } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
  state = {
    list: [],
  };

  // executado assim que o componente aparece em tela
  async componentDidMount() {
    // link/todos?_limit=10
    const [list] = await Promise.all([
      api.get(`/todos`, {
        params: {
          _limit: 10,
        },
      }),
    ]);
    // modifica o estado list para list.data
    this.setState({
      list: list.data,
    });
  }

  render() {
    const { list } = this.state;
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
            <h1>List</h1>
            <ul>
              {list.map(item => (
                <li key={String(item.id)}>
                  {item.title}
                  <span> {item.completed ? 'false' : 'true'}</span>
                  <Link to={`/edit/${item.id}`} className="link">
                    Editar
                  </Link>
                </li>
              ))}
            </ul>
          </BlockTwo>
        </Wrapper>
      </Container>
    );
  }
}
