import React, {useContext} from "react";
import {Context} from "../../../index";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, ORDERS_ROUTE} from "../../../utils/consts";
import BasketNavBar from "../BasketNavBar";
import exit from "../../../assets/exit.png";
import {Image} from "react-bootstrap";

const TrueAuth = () => {
    const {user, basket} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        basket.resetBasket();
    }

    return (
        <div className="auth__container">
            <BasketNavBar/>
            {user.isAuth && user.User.role === "ADMIN" && 
            <>
            <button className="auth__button"
                onClick={() => {history.push(ORDERS_ROUTE)}}
            >
                Заказы
            </button>
            <button className="auth__button" onClick={() => {history.push(ADMIN_ROUTE)}}>Админ панель</button>
            </>
            }
            <button className="auth__button" onClick={() => logOut()}>
                <Image src={exit} className="bascket__img" alt="exit"/>
            </button>
        </div>
    );
};

export default TrueAuth;
