import React from 'react';
import './app.css';
import axios from 'axios';
import AddNewItem from './components/add-item.js';
import Items from './components/items.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    console.log(item);
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems();
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  }

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item._id}`, item);
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    console.log(items);
    this.setState({items});
    console.log(items);
  }

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <div>
        <h1 id='headingTitle'>Our Items</h1>
        <AddNewItem handleAddItem={this.addItem} />
        <hr />
        <Items handleUpdate={this.updateItem} handleDelete={this.deleteItem} itemsList={this.state.items} />
      </div>
    );
  }
}

export default App;
