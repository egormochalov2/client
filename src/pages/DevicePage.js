import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Image, ListGroup, Row, ToggleButton } from "react-bootstrap";
import bigStar from './../assets/star.png';
import { useParams } from 'react-router-dom';
import { addDeviceToBasket, addRating, checkRating, fetchOneDevice } from "../http/deviceAPI";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import RatingStars from "../components/ratingStars";
import { updateDevices } from "../http/deviceAPI";

const DevicePage = observer(() => {
    const { user, basket } = useContext(Context);
    const [device, setDevice] = useState({ info: [], size: 'M' });
    const [resRate, setResRate] = useState("");
    const [isAccessRating, setSsAccessRating] = useState(false);
    const { id } = useParams();
    const [size, setSize] = useState('');

    const putDevice = (id) => {
        const formData = new FormData();
        formData.append('size', device.size);
        updateDevices(id, formData)
    }


    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
        if (user.isAuth) {
            checkRating({ deviceId: id }).then(res => setSsAccessRating(res.allow));
        }
    }, [id, resRate]);

    const isDeviceInBasket = () => {
        const findDevice = basket.Basket.findIndex(item => Number(item.id) === Number(device.id));
        return findDevice < 0;
    }

    const addDeviceInBasket = (device) => {
        putDevice(id);
        if (user.isAuth) {
            addDeviceToBasket(device).then(() => basket.setBasket(device, true))
        } else {
            basket.setBasket(device);
        }
    }

    const ratingChanged = (rate) => {
        addRating({
            rate,
            deviceId: id
        }).then(res => {
            setResRate(res);
        });
    };

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Image className='device-img' src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={6}>
                    <div className='device-content'>
                        <div className='device-type' style={{ backgroundColor: device?.type?.color }}>{device?.type?.name}</div>
                        <h3 className='device-name'>{device?.name}</h3>
                        <div className='device-price'>{device?.price || 0}₽</div>
                        <div className='size-conteiner'>
                            <div>
                                <input onClick={() => device.size = "S"} className='radio' hidden type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
                                <label className='radio-label' for="flexRadioDefault2">
                                    S
                                </label>
                            </div>
                            <div>
                                <input onClick={() => device.size = "M"} className='radio' hidden type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                <label className='radio-label' for="flexRadioDefault1">
                                    M
                                </label>
                            </div>
                            <div>
                                <input onClick={() => device.size = "L"} className='radio' hidden type="radio" name="flexRadioDefault" id="flexRadioDefault3" ></input>
                                <label className='radio-label' for="flexRadioDefault3">
                                    L
                                </label>
                            </div>
                            <div>
                                <input onClick={() => device.size = "XL"} className='radio' hidden type="radio" name="flexRadioDefault" id="flexRadioDefault4" ></input>
                                <label className='radio-label' for="flexRadioDefault4">
                                    XL
                                </label>
                            </div>
                        </div>
                        {isDeviceInBasket() ?
                            <Button className='device-basket' variant="outline-success" onClick={() => addDeviceInBasket(device)}>Добавить в корзину</Button>
                            :
                            <Button className='device-basket' variant="outline-dark" disabled>Добавлен в корзину</Button>
                        }

                    </div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <div className='device-descr'>
                        <h2 className='device-descr-head'>Характеристики</h2>
                        <div className='device-descr-text'>
                            <div className='device-descr-title'>
                                {device.info.map((info, index) =>
                                    <div key={info.id} >
                                        {info.title}
                                    </div>
                                )}
                            </div>
                            <div className='device-descr-desc'>
                            {device.info.map((info, index) =>
                                <div key={info.id} >
                                    {info.description}
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default DevicePage;
