import React, { useState } from 'react';

function Fruits() {

    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange', 'Mango']);

    const changeFruits = () => {
        setFruits(['Grapes', 'Strawberry', 'Watermelon']);
    };

    return (
        <>
            <div>
                <h1>List of Fruits</h1>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
                <button onClick={changeFruits}>Change Fruits</button>
            </div>
        </>
    );
}

export default Fruits;
