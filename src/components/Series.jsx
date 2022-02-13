import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaSeries, DatosTablaSeries } from '../data/DatosSeries';

class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: '',
      titulo2: '',
      fechaestreno2: '',
      temporadas2: '',
      capitulos2: '',
      descripcion2:'',
    };
  }

  eventoclick(item) {
    this.setState({
      imagen: item.imagen,
      titulo2: item.titulo,
      fechaestreno2: item.fechaestreno,
      modoptemporadas2: item.temporadas,
      capitulos2: item.capitulos,
      descripcion2: item.descripción,
    });
  }


  render() {
    return (
      <div className="main-site">
        <h1>Series</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaSeries.id} </th>
                    <th>{TitulosTablaSeries.field1}</th>
                    <th>{TitulosTablaSeries.field2}</th>
                    <th>{TitulosTablaSeries.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaSeries.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                      <td>{item.titulo}</td>
                      <td>{item.fechaestreno}</td>
                      <td>{item.temporadas}</td>
                      <td>{item.capitulos}</td>
                      
                    </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.titulo2}
                  </Card.Title>
                  <Card.Text>

                    {this.state.descripcion2}
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

export default Series;