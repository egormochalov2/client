import React, {useContext, useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {fetchBrands, fetchDevice, fetchTypes} from "../http/deviceAPI";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {sendOrder} from "../http/ordersAPI";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";

const Brand = observer(() => {
    const {device} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevice(null, id, 1, 6).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
        device.setSelectedType("all");
        device.setSelectedBrand("all");
    }, [id]);

    useEffect(
        () => {
            if(device.selectedType === "all") {
                    fetchDevice(null, id, device.page, 6).then(data => {
                        device.setDevices(data.rows);
                        device.setTotalCount(data.count);
                    });
                } else {
                    fetchDevice(device.selectedType.id, id, device.page, 6).then(data => {
                        device.setDevices(data.rows);
                        device.setTotalCount(data.count);
                    });
                }
        }, [device.page, device.selectedType, device.selectedBrand],
    );

    return (
        <Container>
            <Col className="mt-3">
                <Row >
                    <TypeBar/>
                </Row>
                <Row >
                    <DeviceList/>
                    <Pages/>
                </Row>
        </Col>
        </Container>
    );
});

export default Brand;