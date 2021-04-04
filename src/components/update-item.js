import React from 'react';
import Button from 'react-bootstrap/Button';
import '../app.css';

class UpdateItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const item = this.props.item;
    item[field] = value;
    this.setState(item);
  }

  handleSubmit = (e) => {
    console.log('dada');
    e.preventDefault();
    this.props.handleUpdate(this.props.item);
  }

  render() {

    return (
      <form data-testid={`update-form-${this.props.item.name}`} onSubmit={(e) => this.handleSubmit(e)}>
        <input data-testid={`update-field-${this.props.item.name}`} name="notes" placeholder="Add Notes" onChange={this.handleChange} />
        <Button id='updateB' type="submit">Update Item</Button>
      </form>
    );
  }
}

export default UpdateItemForm;
