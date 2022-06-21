import React, {useContext, useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevice, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";
import { Link } from 'react-router-dom';
import tolst from '../assets/tolst.jpg'
import chex from '../assets/chex.jpg'
import koft from '../assets/koft.jpeg'

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevice(null, null, 1, 9).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, []);

    useEffect(
        () => {
            if(device.selectedType === "all") {
                    fetchDevice(null, device.selectedBrand.id, device.page, 9).then(data => {
                        device.setDevices(data.rows);
                        device.setTotalCount(data.count);
                    });
                } else {
                    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data => {
                        device.setDevices(data.rows);
                        device.setTotalCount(data.count);
                    });
                }
        }, [device.page, device.selectedType, device.selectedBrand],
    );

    return (
        <div className="mainPage-conteiner">
            <Col className='mainPage-item-conteine'  md={4}>
            <Image className="mainPage-img" src={tolst}></Image>
                <Link className="mainPage-item" to={"/brand/1"}>
                    <h2 className="mainPage-item-head tolst"></h2>
                </Link>
            </Col>
            <Col className='mainPage-item-conteine'  md={4}>
                <Image className="mainPage-img" src={chex}></Image>
                <Link className="mainPage-item" to={"/brand/2"}>
                    <h2 className="mainPage-item-head chex"></h2>
                </Link>
            </Col>
            <Col className='mainPage-item-conteine' md={4}>
                <Image className="mainPage-img" src={koft}></Image>
                <Link className="mainPage-item" to={"/brand/3"}>
                    <h2 className="mainPage-item-head koft"></h2>
                </Link>
            </Col>
        </div>
    );
});

export default Shop;
