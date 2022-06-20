import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";


import {Context} from "../index";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import OneItemInBasket from "../components/oneItemInBasket";

import emptyBasket from "./../assets/emptyBasket.jpg";
import {ORDERING_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const BasketCard = observer(() => {
    const {basket} = useContext(Context);

    if(basket.Basket.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
                <Image src={emptyBasket}/>
                <div className="text-center mt-5" style={{fontSize: 28}}><b>Корзина пуста</b></div>
            </div>
        )
    }

    return (
        <Container>
            <Row className="mt-3">
                <Col xs={12}>
                    {basket.Basket.map(device => <OneItemInBasket key={device.id} device={device}/>)}
                </Col>
            </Row>
            <NavLink  className="button-complite-conteiner col-4" to={ORDERING_ROUTE}>
                <button className='button-complite'>Перейти к оформлению</button>
            </NavLink>
        </Container>
    );
});

export default BasketCard;
