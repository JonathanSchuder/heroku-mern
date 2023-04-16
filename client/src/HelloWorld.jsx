import React, { useState, useEffect } from 'react';

function HelloWorld() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/hello')
            .then(res => res.text())
            .then(data => setMessage(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default HelloWorld;