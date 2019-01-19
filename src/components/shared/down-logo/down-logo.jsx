import React from 'react';
import logo from '../../../assets/images/down.jpg';
import './down-logo.scss';

function DownLogo() {
    return (
        <div className="down-logo">
            <img src={logo} className="img-fluid rounded-circle" />
        </div>
    );
}

export default DownLogo