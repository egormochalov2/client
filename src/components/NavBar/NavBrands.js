import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Link, NavLink} from "react-router-dom";
import {fetchBrands, fetchDevice, fetchTypes} from "../../http/deviceAPI";

import {Context} from "../../index";

import {Container, Navbar} from "react-bootstrap";
import {BRAND_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import TrueAuth from "./preesent-components/trueAuth";
import FalseAuth from "./preesent-components/falseAuth";

const NavBrands = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevice(null, null, 1, 6).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, []);

    return (
        <ul className='header__brand-list'>
            {device.brands.map(brand =>
                <li className='header__brand-item'>
                    <Link to={BRAND_ROUTE+"/"+brand.id}>{brand.name}</Link>
                </li>
            )}
        </ul>
    );
});

export default NavBrands;