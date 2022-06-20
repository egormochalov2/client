import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

import star from './../assets/star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory();
    return (
        <div  className='items__list-item' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div  >
                <Image className='items__list-item-img' style={{width: "100%"}} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='items__list-item-content'>
                    <div className="items__list-type" style={{backgroundColor:device.type.color}}>{device && device.type.name}</div>
                    <div className='items__list-item-name'>{device.name}</div>
                    <div className='items__list-item-price'>{device.price}₽</div>
                </div>
            </div>
        </div>
    );
};

export default DeviceItem;
