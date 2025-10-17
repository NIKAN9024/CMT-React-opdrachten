import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
    const [message, setMessage] = useState('Welkom!');

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('Fijn dat je er bent!');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default WelcomeMessage;



