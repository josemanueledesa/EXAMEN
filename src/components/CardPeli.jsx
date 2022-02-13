import React from 'react';
import { Card } from 'react-bootstrap';

class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.cardData;
  }

  render() {
    this.data !== null
      ? console.log(`Objeto seleccionado (en card): ${this.data.title}`)
      : console.log(`No hay objeto seleccionado (en card)`);
    if (this.data !== null) {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.data.image} />
          <Card.Body>
            <Card.Title>{this.data.title}</Card.Title>
            <Card.Text>
              Título original: {this.data.original_title}
              <p />
              Director: {this.data.director}
              <p />
              Argumento: {this.data.description}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return <div />;
    }
  }
}

export default CardPeli;