import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context);

    const getAllDevices = () => {
        console.log(1)
        device.setSelectedType("all");
        device.setSelectedBrand("all");
    }

    return (
        <ListGroup className='type-list'>
            <ListGroup.Item className='type-item'
                style={{cursor: "pointer"}}
                active={"all" === device.selectedType}
                onClick={getAllDevices}
            >
                Все
            </ListGroup.Item>
            {device.types.map(type =>
                <ListGroup.Item  className='type-item'
                    style={{cursor: "pointer",backgroundColor:type.color}}
                    active={type.id === device.selectedType.id}
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
