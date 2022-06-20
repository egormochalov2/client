import React, {useContext} from 'react';
import {Image} from "react-bootstrap";
import shop_cart from "../../assets/shopping-basket.png";
import {NavLink} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {BASKET_ROUTE} from "../../utils/consts";

const BasketNavBar = observer(() => {
    const {basket} = useContext(Context);

    return (
        <div >
            <NavLink to={BASKET_ROUTE} className="bascket__button">
                <Image src={shop_cart} className="bascket__img" alt="basket"/>
                <div className="bascket__count" >{basket.Count}</div>
            </NavLink>
        </div>
    );
});
export default BasketNavBar;


