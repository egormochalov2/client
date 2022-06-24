import React, {useContext} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import krest from '../assets/krest.svg'

const OneItemInBasket = observer(({device}) => {
    const {basket, user} = useContext(Context);

    return (
        <Card key={device.id} style={{width: "100%"}} className="mb-3">
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image src={process.env.REACT_APP_API_URL + device.img} style={{width: "100%", maxWidth: 250}} />
                    </Col>
                    <Col xs={8} className='basket-content'>
                        <Row>
                            <Col xs={12}>
                                <NavLink to={`/device/${device.id}`}>{device.name} - {device.size}</NavLink>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col className='basket-item-price' xs={12}>
                                {device.price * device.count} ₽
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className='basket-item-count' xs={12} >
                                Количество: {device.count}
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className='basket-item-desc' xs={12}>
                                {device.info && device.info.length !== 0? device.info.map((info, i) => {

                                    if(i % 2 === 0 ) {
                                        return (
                                            <Row key={info.id}>
                                                <Col xs={6}>
                                                    {info.title}
                                                </Col>
                                                <Col xs={6}>
                                                    {info.description}
                                                </Col>
                                            </Row>
                                        );
                                    } else {
                                        return (
                                            <Row key={info.id}>
                                                <Col xs={6}>
                                                    {info.title}
                                                </Col>
                                                <Col xs={6}>
                                                    {info.description}
                                                </Col>
                                            </Row>
                                        );
                                    }

                                }) : "Нет описания"}
                            </Col>
                        </Row>
                        <Row className="sizeButton-conteiner">
                            <Col xs={12} className="sizeButton-content">
                                <button className='button-size' onClick={() => basket.setCountDevice(device.id, "+")}>+</button>
                                <button className='button-size' onClick={() => basket.setCountDevice(device.id, "-")}>-</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Col xs={12} className="button-delite-conteiner">
                                {user.isAuth ? <button className='button-delite'  onClick={() => basket.setDeleteItemBasket(device, true)}><Image width={15} height={15} src={krest}></Image></button>
                                    : <button className='button-delite'  onClick={() => basket.setDeleteItemBasket(device)}><Image width={15} height={15} src={krest}></Image></button>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
)});

export default OneItemInBasket;
