import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () => {
    return (
        <React.Fragment>
            <Header />
            Page Not Found. Go To <Link to="/dashboard">Home Page</Link>
        </React.Fragment>
    )
}

export default NotFound

// Walkthrough of this component
// 1. First we import react, the link from react-router-dom, and the header from the header component.
// 2. We then render the things in not found with const NotFound, returning the Header and Link within a react fragment.
// 3. A react fragment is a way to group a list of children without having to add extra nodes to the DOM.
// 4. Lastly, the component is exported