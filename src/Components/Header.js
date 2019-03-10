import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function HeaderComponent(){
    return(
        <div className="listWrapper">
            <div className="listItems">
<Link to='/'>Home</Link>
            </div>
            <div className="listItems">
<Link to='/about'>About</Link>
            </div>
            <div className="listItems">
<Link to='/team'>Team</Link>
            </div>
        </div>
    )
}
export default HeaderComponent