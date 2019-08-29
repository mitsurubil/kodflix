import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div class='notfound'>
            <h1>Nothing here!</h1>
            <Link to='/'>Back to Home page</Link>
        </div>
    )
}