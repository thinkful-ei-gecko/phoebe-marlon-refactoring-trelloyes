import React from 'react'
import './List.css';
import Card from './Card.js';

function List(props) {
  return (
      <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {props.cardIds.map(obj => <Card title={obj.title} content={obj.content} key={obj.id} onClickDelete={() => props.onClickDelete(obj.id)} />)}
          <button 
            type="button"
            className="List-add-button" 
            onClick={() => props.onClickNew(props.id)}
          >
            + Add Random Card
          </button>
        </div>
      </section>
  );
}


export default List;
