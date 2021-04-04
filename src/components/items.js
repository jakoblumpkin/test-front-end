import React from 'react';
import UpdateItemForm from './update-item';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Items extends React.Component {

  render() {

    return (
      <section id='outBox'>
        <h2>Items...</h2>
        {
          this.props.itemsList.map( (item,idx) =>
           <div class='card1' key={idx}>
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                      {item.description}<br/>
                      {item.notes}
                      <blockquote>{item.notes}</blockquote>
                        <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} />
                        <Button id='deleteB' variant='danger'
                          data-testid={`delete-button-${item.name}`}
                          onClick={ () => this.props.handleDelete(item._id) }
                         >Delete Item </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        }
      </section>
    );
  }
}

export default Items;
