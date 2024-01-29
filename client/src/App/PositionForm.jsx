import React, { useState } from 'react';
import axios from 'axios';

const PositionForm = ({ onAddOrUpdate }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPosition = { name };
        axios.post('http://localhost:3001/api/positions', newPosition)
            .then(response => {
                onAddOrUpdate();
                setName('');
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='flex justify-center pb-5'>
            <div>
            <h2 className='text-blue-600 pb-2'>Add New Position</h2>
            <form onSubmit={handleSubmit} className='flex gap-3'>
                <input 
                type="text" 
                value={name} 
                className='border border-blue-600 rounded-md text-zinc-600 pl-2'
                onChange={(e) => setName(e.target.value)} 
                placeholder="Position name" required 
                />
                <button type="submit" className='bg-yellow-500 text-white px-5 rounded-md'>Add</button>
            </form>
            </div>
        </div>
    );
};

export default PositionForm;