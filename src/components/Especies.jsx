import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
//import CardPeli from './CardPeli';

import './table_component.css';

class Especies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/Species');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    this.state.selectedItem !== null
      ? console.log(`Objeto seleccionado: ${this.state.selectedItem.name}`)
      : console.log(`No hay objeto seleccionado`);
    return (
      <div className="main-site">
        <h1>Especies</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Clasificacion</th>
                    <th>Color de ojos</th>
                    <th>Color de pelo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.name}</td>
                        <td>{item.classification}</td>
                        <td>{item.eye_colors}</td>
                        <td>{item.hair_colors}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<Especies cardData={this.state.selectedItem} />*/}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.image} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.name}</Card.Title>
                  <Card.Text>
                  Clasificacion: {this.state.selectedItem.classification}
                    <p />
                    Color de ojos: {this.state.selectedItem.eye_colors}
                    <p />
                    Color de pelo: {this.state.selectedItem.hair_colors}
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

export default Especies;