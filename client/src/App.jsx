import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import PositionItem from './App/PositionItem';
import PositionForm from './App/PositionForm';

function App() {

    const [positions, setPositions] = useState([]);

    const fetchPositions = () => {
        axios.get('http://localhost:3001/api/positions')
            .then(response => setPositions(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchPositions();
    }, []);

    const handleAddOrUpdate = () => {
        fetchPositions();
    };

  return (
    <>
      <div className='flex justify-center'>
        <div className='p-10'>
          <h2 className='text-blue-600 text-2xl'>Position List</h2>
          <div className='bg-blue-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
        <PositionForm onAddOrUpdate={handleAddOrUpdate} />
        <div className='flex justify-center'>
          <ul>
              {positions.map(position => (
                  <PositionItem key={position.id} position={position} onDelete={handleAddOrUpdate} />
              ))}
          </ul>
        </div>
    </>
  )
}

export default App
