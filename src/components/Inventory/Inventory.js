import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
    fetch('http://localhost:5000/addProduct', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fakeData[0])
    })
    return (
        <div>
            
        </div>
    );
};

export default Inventory;