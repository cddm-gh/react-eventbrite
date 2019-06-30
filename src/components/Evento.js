import React from 'react';

const Evento = ({ event }) => {

  //Extract the text from the event
  let { text } = event.description;
  if (text) {
    if (text.length > 150) {
      text = text.substr(0, 150)
    }
  } else {
    text = null;
  }

  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
          {text}
        </div>
        <div className="uk-card-footer">
          <a href={event.url} className="uk-button uk-button-secondary" target="_blank" rel="noopener noreferrer">
            More Info
        </a>
        </div>
      </div>
    </div>
  );
}

export default Evento;