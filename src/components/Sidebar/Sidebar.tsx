import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changeTypeCheck } from "../../store/action-creators/type";

import PriceSlider from "../PriceSlider/PriceSlider";
import Checkbox from "../Checkbox/Checkbox";

import "./Sidebar.scss";
import categoryIcon from "../../assets/svg/tab-filter--red.svg";
import filterIcon from "../../assets/svg/filter.svg";
import helpIcon from "../../assets/svg/help.svg";

const Sidebar: React.FC = () => {
    const { type, filter, product } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

    let maxPrice = product.reduce((acc, curr) =>
        acc.price > curr.price ? acc : curr
    ).price;
    let minPrice = product.reduce((acc, curr) =>
        acc.price < curr.price ? acc : curr
    ).price;

    const price: [number, number] = [minPrice, maxPrice];

    const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTypeCheck(e.target.id));
    };

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
                        <PriceSlider price={price} />
                    </div>

                    <div className="filter__item">
                        <div className="filter__item-name">
                            <div>
                                Тип продукта <img src={helpIcon} alt="help" />
                            </div>
                            <i className="arrow-down"></i>
                        </div>
                        {type.map((type) => {
                            return (
                                <Checkbox
                                    key={type.id}
                                    label={type.name}
                                    id={type.id}
                                    isChecked={type.isChecked}
                                    onChange={onCheckBoxChange}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="filter__button-container">
                    <button className="filter__button-reset">
                        Сбросить фильтры
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Sidebar;
