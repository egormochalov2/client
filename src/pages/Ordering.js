import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Context } from "../index";
import { sendOrder } from "../http/ordersAPI";
import { useHistory } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const Ordering = () => {
    const { basket, user } = useContext(Context);
    const [phone, setPhone] = useState(null);
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const buy = () => {
        let order = {
            mobile: phone,
            name: name,
            secondName: secondName,
            email: email,
            basket: basket.Basket
        }

        if (user.isAuth) {
            order.auth = true;
        }

        sendOrder(order).then(data => {
            console.log(data);
            basket.setDeleteAllDeviceFromBasket();
            history.push(SHOP_ROUTE);
        });
    }
    return (
        <Container>
            <Form className='sendForm'>
                <Form.Group>
                    <Form.Label>
                        Номер телефона
                    </Form.Label>
                    <Form.Control type="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Имя
                    </Form.Label>
                    <Form.Control type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Фамилия
                    </Form.Label>
                    <Form.Control type="name"
                        value={secondName}
                        onChange={e => setSecondName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Почта
                    </Form.Label>
                    <Form.Control  type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Row className="mt-3">
                <Col xs={12} className='button-conteiner'>
                    <Button className='button-send' variant="success" onClick={buy}>Заказать</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Ordering;
