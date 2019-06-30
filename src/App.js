import React from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import EventsProvider from './context/EventsContext';
import Formulario from './components/Formulario';
import ListEvents from './components/ListEvents';

function App() {
  return (
    <EventsProvider>

      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListEvents />
        </div>
      </CategoriasProvider>
    </EventsProvider>
  );
}

export default App;
