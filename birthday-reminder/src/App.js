import './App.css';
import List from './List';
import data from './data';
import React,{useState} from 'react';
function App() {
  const [people,setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays on the List</h3>
        <List people={people} />
        <button on onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
