import './App.css';
import Loading from './Loading';
import Tours from './Tours';
import React,{useState,useEffect} from 'react';
const url = 'http://localhost:8000/tours';
function App() {
  const [loading,setLoading] = useState(false);
  const [tours,setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id!==id);
    setTours(newTours);
  }

const fetchTours = async () => {
  setLoading(true);
  try{
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  } catch(error){
    setLoading(false);
    console.log(error);
  }
};
useEffect(()=>{
  fetchTours();
},[]);
  if (loading) {
    return (
      <main>
        {loading && <Loading />}
      </main>
    );
  }
  if (tours.length==0) {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className='btn' onClick={(fetchTours)}>Refresh</button>
      </div>
    </main>
  }
    return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
