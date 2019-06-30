import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventsConsumer } from '../context/EventsContext';

class Formulario extends Component {
  state = {
    name: '',
    category: ''
  }

  //get the event data
  getEventData = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <EventsConsumer>
        {(value) => {
          // console.log(value);
          return (

            <form
              onSubmit={(e) => {
                e.preventDefault();

                value.searchEvents(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Search event by name or category
          </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    type="text"
                    name="name"
                    className="uk-input"
                    placeholder="Name of the event"
                    onChange={this.getEventData}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="category"
                    onChange={this.getEventData}
                  >
                    <option value="">--Choose Category</option>
                    <CategoriasConsumer>
                      {(value) => {
                        return (
                          value.categories.map(cat => (
                            <option key={cat.id} value={cat.id} data-uk-form-select>
                              {cat.name}
                              {/* name_localized for other locales */}
                            </option>
                          ))
                        )
                      }}
                    </CategoriasConsumer>
                  </select>
                </div>
                <div>
                  <input type="submit" className="uk-button uk-button-danger" value="Search Event" />
                </div>
              </div>
            </form>
          )
        }}
      </EventsConsumer>
    );
  }
}

export default Formulario;