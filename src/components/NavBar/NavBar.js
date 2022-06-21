import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import { Context } from "../../index";

import { Container, Navbar, Button, Form, FormControl, NavDropdown, Nav } from "react-bootstrap";
import { SHOP_ROUTE } from "../../utils/consts";
import TrueAuth from "./preesent-components/trueAuth";
import FalseAuth from "./preesent-components/falseAuth";
import NavBrands from './NavBrands';
import { Image } from "react-bootstrap";
import logo from '../../assets/logo.png'
import burger from '../../assets/burger.png'

const NavBar = observer(() => {
    const { user } = useContext(Context);

    return (
        <header className="header">
            <nav className='header__nav container' >
                <NavLink className="logo" to={SHOP_ROUTE}>DENWERO<Image className='logo__img' src={logo}></Image></NavLink>
                <NavBrands />
                {user.isAuth ? <TrueAuth /> : <FalseAuth />}
                <button className='burger-button' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Image className='burger-img' src={burger}></Image>
                </button>
            </nav>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <NavBrands />
                    </div>
                </div>
        </header>
    );
});

export default NavBar;
