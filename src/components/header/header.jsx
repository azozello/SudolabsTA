import React from 'react';
import './header.scss';

function Header() {
    return (
        <div className="col-12 header">
            <div className="row h-100 align-items-center">
                <div className="col-auto">Help</div>
                <div className="col-auto">Clever store</div>
                <div className="col-auto">Other</div>
            </div>
        </div>
    );
}

export default Header