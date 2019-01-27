import React from 'react';
import logo from '../../dog-paw.svg';

const LogoMain = (props) => {
    return (
        <figure>
            <img src={logo} alt="cat-paw" className="main-sidebar__logo" />
            <figcaption>
                <h2 className="main-sidebar__title">Будинок котів</h2>
            </figcaption>
        </figure>
      )
}

export default LogoMain