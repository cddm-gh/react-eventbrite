import React, { Component } from 'react';
import axios from 'axios';

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

  token = 'VLV5FHHND4AK64CXBM3O';
  locale = 'en_US'; // es_ES

  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=${this.locale}`;

    let categories = await axios.get(url);

    this.setState({
      categories: categories.data.categories
    });
  }

  render() {
    return (
      <CategoriasContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}


export default CategoriasProvider;