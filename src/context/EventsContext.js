import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {

  token = 'VLV5FHHND4AK64CXBM3O';
  sort_by = 'date';

  state = {
    events: [],
    error: false
  }

  searchEvents = async (search) => {

    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sort_by}&token=${this.token}`;

    try {
      const events = await axios(url);
      if (events.data.events.length === 0) {
        console.log('No hay eventos con ese nombre');
        this.setState({
          error: true
        })
        return;
      }
      this.setState({
        events: events.data.events
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          searchEvents: this.searchEvents
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;