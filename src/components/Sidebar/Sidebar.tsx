import PriceSlider from "../Slider/PriceSlider";
import Checkbox from "../Checkbox/Checkbox";

import "./Sidebar.scss";
import categoryIcon from "../../assets/svg/tab-filter--red.svg";
import filterIcon from "../../assets/svg/filter.svg";
import helpIcon from "../../assets/svg/help.svg";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__category">
                <div className="sidebar__title">
                    <div className="sidebar__title-name">
                        <img src={categoryIcon} alt="category" />
                        Категории
                    </div>
                    <i className="arrow-down"></i>
                </div>

                <ul className="category__list">
                    <li className="category__item">
                        <div className="category__item-type">
                            Серия 5.904-1 выпуск 1:
                        </div>
                        <a href="" className="category__item-name">
                            Изделия и детали трубопроводов для тепловых сетей{" "}
                            <div className="category__item-num">95</div>
                        </a>
                    </li>
                    <li className="category__item">
                        <div className="category__item-type">
                            Серия 5.904-1 выпуск 1:
                        </div>
                        <a href="" className="category__item-name">
                            Изделия и детали трубопроводов для тепловых сетей{" "}
                            <div className="category__item-num">95</div>
                        </a>
                    </li>

                    <li className="category__item">
                        <div className="category__item-type">
                            Серия 5.904-1 выпуск 1:
                        </div>
                        <a href="" className="category__item-name">
                            Изделия и детали трубопроводов для тепловых сетей{" "}
                            <div className="category__item-num">95</div>
                        </a>
                    </li>

                    <li className="category__item">
                        <div className="category__item-type">
                            Серия 5.904-1 выпуск 1:
                        </div>
                        <a href="" className="category__item-name">
                            Изделия и детали трубопроводов для тепловых сетей{" "}
                            <div className="category__item-num">9312</div>
                        </a>
                    </li>

                    <li className="category__item">
                        <div className="category__item-type">
                            Серия 5.904-1 выпуск 1:
                        </div>
                        <a href="" className="category__item-name">
                            Изделия и детали трубопроводов для тепловых сетей{" "}
                            <div className="category__item-num">951</div>
                        </a>
                    </li>
                </ul>

                <div className="show__more">
                    Показать ещё
                    <i className="arrow-down arrow-down--red"></i>
                </div>
            </div>

            <form className="sidebar__filter">
                <div className="sidebar__title">
                    <div className="sidebar__title-name">
                        <img src={filterIcon} alt="category" />
                        Фильтры
                    </div>
                </div>

                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__item-name">
                            Цена, руб
                            <i className="arrow-down"></i>
                        </div>
                        <PriceSlider />
                    </div>

                    <div className="filter__item">
                        <div className="filter__item-name">
                            <div>
                                Тип продукта <img src={helpIcon} alt="help" />
                            </div>
                            <i className="arrow-down"></i>
                        </div>
                        <Checkbox label={"Проверка"} id={"1"} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Sidebar;
