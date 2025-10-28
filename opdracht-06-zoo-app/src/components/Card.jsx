import React from 'react';

function Card({animal}) {
    const {name, species, img} = animal;

    return (
        <div
        className='card'
        onClick={() => navigate(`/detail/$(animal.id)`)}></div>
    )