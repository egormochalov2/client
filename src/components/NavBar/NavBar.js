import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

import {Context} from "../../index";

import {Container, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../../utils/consts";
import TrueAuth from "./preesent-components/trueAuth";
import FalseAuth from "./preesent-components/falseAuth";
import NavBrands from './NavBrands';
import {Image} from "react-bootstrap";
import logo from '../../assets/logo.png'

const NavBar = observer(() => {
    const {user} = useContext(Context);

    return (
        <header className="header">
            <nav className='header__nav container' >
                    <NavLink className="logo"  to={SHOP_ROUTE}>DENWERO<Image className='logo__img' src={logo}></Image></NavLink>
                    <NavBrands/>
                    {user.isAuth ? <TrueAuth/> : <FalseAuth/>}
            </nav>
        </header>
    );
});

export default NavBar;
