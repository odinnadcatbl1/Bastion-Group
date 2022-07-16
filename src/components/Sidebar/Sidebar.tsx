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
                        <div className="filter__price-inputs">
                            <label className="filter__price-label">
                                <span className="filter__price-text">от</span>
                                <input
                                    className="filter__price-input"
                                    id="price-input-1"
                                    placeholder="200"
                                />
                            </label>
                            <label className="filter__price-label">
                                <span className="filter__price-text">до</span>
                                <input
                                    className="filter__price-input"
                                    id="price-input-2"
                                    placeholder="199"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Sidebar;
