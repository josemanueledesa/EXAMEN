import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
//import CardPeli from './CardPeli';

import './table_component.css';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    this.state.selectedItem !== null
      ? console.log(`Objeto seleccionado: ${this.state.selectedItem.title}`)
      : console.log(`No hay objeto seleccionado`);
    return (
      <div className="main-site">
        <h1>Películas de Studio Ghibli</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<CardPeli cardData={this.state.selectedItem} />*/}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.image} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.title}</Card.Title>
                  <Card.Text>
                    Título original: {this.state.selectedItem.original_title}
                    <p />
                    Director: {this.state.selectedItem.director}
                    <p />
                    Argumento: {this.state.selectedItem.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PelisGhibli;