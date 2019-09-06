import React from 'react';
import List from './composition/List.js';
import './App.css';




function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
          <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map(item => <List header={item.header} cardIds={item.cardIds.map(id => props.store.allCards[id])} key={item.id} />)}
      </div>
    </main>
  );
}


export default App;
