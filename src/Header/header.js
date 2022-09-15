import React from 'react';
import header from './header.css';
import logoMpro from '/public/logompro.png'

function Header(){
    return(
        <React.Fragment>
            <div>
                <header className='header'><img src={logoMpro} alt=''></img>
                </header>
            </div>
        </React.Fragment>
    );
}

export {Header};