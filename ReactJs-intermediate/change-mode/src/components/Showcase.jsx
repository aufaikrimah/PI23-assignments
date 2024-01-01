import React from 'react';
import { Link } from 'react-router-dom';

function Showcase(props) {
    const { id, title, photo, price } = props.products;

    return (

        <Link to={`/product/${id}`}>
            <div className="w-24 shadow-lg rounded-lg mx-2 my-3">

                <div>
                    <img src={photo} alt={title} className="w-full mb-4 rounded-md" />
                </div>
                <div className='p-4'>
                    <h1 className="text-xl font-bold mb-2">{title}

                    </h1>
                    <p>{price}</p>
                </div>
            </div>
        </Link>

    );
}

export default Showcase;
