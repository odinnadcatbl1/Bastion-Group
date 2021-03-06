import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changeTypeCheck } from "../../store/action-creators/type";
import {
    addTypeFilter,
    changePriceFilter,
} from "../../store/action-creators/filter";
import {
    deleteTypeFilter,
    resetAllFilters,
} from "../../store/action-creators/filter";

import PriceSlider from "../PriceSlider/PriceSlider";
import Checkbox from "../Checkbox/Checkbox";

import "./Sidebar.scss";
import categoryIcon from "../../assets/svg/tab-filter--red.svg";
import filterIcon from "../../assets/svg/filter.svg";
import helpIcon from "../../assets/svg/help.svg";
import React, { useEffect } from "react";

const Sidebar: React.FC = () => {
    const { type, product, filter } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

    let price: [number, number] = [0, 0];

    if (product.length) {
        let maxPrice = product.reduce((acc, curr) =>
            acc.price > curr.price ? acc : curr
        ).price;

        let minPrice = product.reduce((acc, curr) =>
            acc.price < curr.price ? acc : curr
        ).price;

        price = [minPrice, maxPrice];
    }

    const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const changedType = type.filter((type) => type.id === e.target.id)[0]
            .name;
        dispatch(changeTypeCheck(e.target.id));
        if (!e.target.checked) {
            dispatch(deleteTypeFilter(changedType));
        } else {
            dispatch(addTypeFilter(changedType));
        }
    };

    const onResetAllFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(resetAllFilters());
        type.map((type) => {
            type.isChecked = false;
        });
        dispatch(changePriceFilter(price));
    };

    return (
        <div className="sidebar">
            <div className="sidebar__category">
                <div className="sidebar__title">
                    <div className="sidebar__title-name">
                        <img src={categoryIcon} alt="category" />
                        ??????????????????
                    </div>
                    <i className="arrow-down"></i>
                </div>

                <ul className="category__list">
                    <li className="category__item">
                        <div className="category__item-type">
                            ?????????? 5.904-1 ???????????? 1:
                        </div>
                        <a href="" className="category__item-name">
                            ?????????????? ?? ???????????? ?????????????????????????? ?????? ???????????????? ??????????{" "}
                            <div className="category__item-num">95</div>
                        </a>
                    </li>
                    <li className="category__item">
                        <div className="category__item-type">
                            ?????????? 5.904-1 ???????????? 1:
                        </div>
                        <a href="" className="category__item-name">
                            ?????????????? ?? ???????????? ?????????????????????????? ?????? ???????????????? ??????????{" "}
                            <div className="category__item-num">95</div>
                        </a>
                    </li>

                    <li className="category__item">
                        <div className="category__item-type">
                            ?????????? 5.904-1 ???????????? 1:
                        </div>
                        <a href="" className="category__item-name">
                            ?????????????? ?? ???????????? ?????????????????????????? ?????? ???????????????? ??????????{" "}
                            <div className="category__item-num">95</div>
                        </a>
                    </li>

                    <li className="category__item">
                        <div className="category__item-type">
                            ?????????? 5.904-1 ???????????? 1:
                        </div>
                        <a href="" className="category__item-name">
                            ?????????????? ?? ???????????? ?????????????????????????? ?????? ???????????????? ??????????{" "}
                            <div className="category__item-num">9312</div>
                        </a>
                    </li>

                    <li className="category__item">
                        <div className="category__item-type">
                            ?????????? 5.904-1 ???????????? 1:
                        </div>
                        <a href="" className="category__item-name">
                            ?????????????? ?? ???????????? ?????????????????????????? ?????? ???????????????? ??????????{" "}
                            <div className="category__item-num">951</div>
                        </a>
                    </li>
                </ul>

                <div className="show__more">
                    ???????????????? ??????
                    <i className="arrow-down arrow-down--red"></i>
                </div>
            </div>

            <form className="sidebar__filter">
                <div className="sidebar__title">
                    <div className="sidebar__title-name">
                        <img src={filterIcon} alt="category" />
                        ??????????????
                    </div>
                </div>

                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__item-name">
                            ????????, ??????
                            <i className="arrow-down"></i>
                        </div>
                        <PriceSlider price={price} />
                    </div>

                    <div className="filter__item">
                        <div className="filter__item-name">
                            <div>
                                ?????? ???????????????? <img src={helpIcon} alt="help" />
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
                    <button
                        className="filter__button-reset"
                        onClick={onResetAllFilters}
                    >
                        ???????????????? ??????????????
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Sidebar;
