import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getOneOrderDevices} from "../http/ordersAPI";

const OneOrder = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        getOneOrderDevices(id).then(data => {
            setOrder(data);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <Spinner animation="grow"/>
    }

    //Format date (createdAt)
    const formatDate = (propsDate) => {
        const date = new Date(Date.parse(propsDate));
        const options = {
            weekday: "short",
            hour: 'numeric',
            minute: 'numeric',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC'
        };
        return date.toLocaleString("en-US", options);
    }

    return (
        <Container className="d-flex flex-column order-conteiner">
            Номер заказа: {id} <br />
            Статус: {order?.descr.complete ? "Выполнен" : "Не выполнен"} <br />
            Пользователь: {order?.descr.userId ?  order.descr.userId : "Пользователь не зарегисрирован"} <br />
            Дата создания: {formatDate(order?.descr.createdAt)} <br />
            Имя : {order?.descr.name}<br />
            Фамилия : {order?.descr.secondName}<br />
            Почта : {order?.descr.email}<br />
            {order?.descr.complete ? formatDate(order.descr.complete.updatedAt) : false }
            <a href={`tel:${order?.descr.mobile}`}>Номер телефона: {order?.descr.mobile}</a>
            <br />

            {order?.devices.map( ({count,size,descr}, i) => {
                console.log(order?.devices)
                return (
                    <Row key={i} className="mb-5">
                        <Col xs={2}>
                            <Image width={150} src={process.env.REACT_APP_API_URL + descr.img}/>
                        </Col>
                        <Col xs={10}>
                            Тип: {descr.brand.name}<br />
                            Аниме: {descr.type.name}<br />
                            Размер: {size}<br />
                            Название: {descr.name}<br />
                            Цена: {descr.price}₽<br />
                            Количество: {count}<br />
                            Полная цена: {count * descr.price}₽
                        </Col>
                    </Row>
                )
            })}

        </Container>
    );
};

export default OneOrder;
