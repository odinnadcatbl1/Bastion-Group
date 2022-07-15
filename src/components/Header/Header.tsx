import { Link } from "react-router-dom";

import "./Header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__link">Типы продуктов</li>
                            <li className="nav__link">Продукты</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container"></div>
            </div>
        </header>
    );
};

export default Header;
