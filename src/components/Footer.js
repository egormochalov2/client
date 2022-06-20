import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Container } from 'react-bootstrap';



const Footer = observer(() => {

    return (
        <footer className="footer">
            <nav className='footer-nav'>
                <Container>
                    <ul className='footer-conteiner'>
                        <li className='footer-item'>
                            <a href="#" className='footer-item-head'>Для клиентов</a>
                            <ul class="footer-sub-menu">
                                <li className='footer-item-link'><a href="#">Моя учетная запись</a></li>
                                <li className='footer-item-link'><a href="#">Оформить заказ</a></li>
                                <li className='footer-item-link'><a href="#">Отзывы</a></li>
                            </ul>
                        </li>
                        <li className='footer-item'>
                            <a href="#" className='footer-item-head'>О нас</a>
                            <ul class="footer-sub-menu">
                                <li className='footer-item-link'><a href="#">Вакансии</a></li>
                                <li className='footer-item-link'><a href="#">Контакты</a></li>
                            </ul>
                        </li>
                        <li className='footer-item'>
                            <a href="#" className='footer-item-head'>Информация</a>
                            <ul class="footer-sub-menu">
                                <li className='footer-item-link'><a href="#">Доставка</a></li>
                                <li className='footer-item-link'><a href="#">Возврат</a></li>
                                <li className='footer-item-link'><a href="#">Публичная оферта</a></li>
                            </ul>
                        </li>
                        <li className='footer-item'>
                            <a href="#" className='footer-item-head'>Контакты</a>
                            <ul class="footer-sub-menu">
                                <li className='footer-item-link'><a href="tel:79159956141">+7(915)995-61-41</a></li>
                                <li className='footer-item-link'><a href="mailto:egor18mochalov@yandex.ru">egor18mochalov@yandex.ru</a></li>
                            </ul>
                        </li>
                    </ul>
                </Container>
            </nav>
        </footer>
    );
});

export default Footer;