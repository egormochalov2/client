import React from "react";

import {Button, Nav} from "react-bootstrap";
import {LOGIN_ROUTE} from "../../../utils/consts";
import {NavLink} from "react-router-dom";
import BasketNavBar from "../BasketNavBar";
import profile from '../../../assets/profile.png'
import {Image} from "react-bootstrap";

const FalseAuth = () => {
    return (
        <div className="auth__container">
            <BasketNavBar/>
            <NavLink to={LOGIN_ROUTE}>
                <button className="auth__button" variant={"outline-light"}><Image src={profile} className="bascket__img" alt="profile"></Image></button>
            </NavLink>
        </div>
    );
};

export default FalseAuth;
