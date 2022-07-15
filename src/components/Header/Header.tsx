import { Link } from "react-router-dom";

import "./Header.scss";
import phoneIcon from "../../assets/svg/phone.svg";
import locIcon from "../../assets/svg/location.svg";
import mailIcon from "../../assets/svg/mail.svg";
import logo from "../../assets/img/logo.png";
import catalogIcon from "../../assets/svg/tab-filter.svg";
import searchIcon from "../../assets/svg/search.svg";
import arrowIcon from "../../assets/svg/arrow.svg";
import starIcon from "../../assets/svg/star.svg";
import cartIcon from "../../assets/svg/cart.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__link">
                                <Link to="/">Типы товаров</Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/s">Продукты</Link>
                            </li>
                        </ul>

                        <div className="header__info">
                            <div className="header__info-item">
                                <a
                                    className="header__phone"
                                    href="tel: +7 (499) 380-78-90"
                                >
                                    <img src={phoneIcon} alt="phone" />
                                    +7 (499) 380-78-90
                                </a>
                            </div>
                            <div className="header__info-item">
                                <img src={locIcon} alt="location" />
                                <span className="header__loc">Москва</span>
                            </div>
                            <div className="header__info-item">
                                <a
                                    className="header__mail"
                                    href="mailto: info@bastion.pro"
                                >
                                    <img src={mailIcon} alt="mail" />
                                    info@bastion.pro
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
