import { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { SliderPropTypes } from "../../types/types";
import { changePriceFilter } from "../../store/action-creators/filter";
import { useDispatch } from "react-redux";
import "./PriceSlider.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PriceSlider: React.FC<SliderPropTypes> = ({ price }) => {
    const filter = useTypedSelector((state) => state.filter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePriceFilter([price[0], price[1]]));
    }, price);

    const updatePriceSlider = (e: any, item: any) => {
        dispatch(changePriceFilter(item));
    };

    const updatePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value) {
            if (e.target.id === "price-input-1") {
                dispatch(changePriceFilter([+e.target.value, price[1]]));
            } else {
                dispatch(changePriceFilter([price[0], +e.target.value]));
            }
        } else {
            dispatch(changePriceFilter([price[0], price[1]]));
        }
    };

    return (
        <div className="slider__container">
            <div className="filter__price-inputs">
                <label className="filter__price-label">
                    <span className="filter__price-text">от</span>
                    <input
                        className="filter__price-input"
                        id="price-input-1"
                        value={filter.price[0]}
                        onChange={updatePriceInput}
                    />
                </label>
                <label className="filter__price-label">
                    <span className="filter__price-text">до</span>
                    <input
                        className="filter__price-input"
                        id="price-input-2"
                        value={filter.price[1]}
                        onChange={updatePriceInput}
                    />
                </label>
            </div>

            <div className="slider">
                <Slider
                    value={filter.price}
                    onChange={updatePriceSlider}
                    max={price[1]}
                    min={price[0]}
                />
            </div>
        </div>
    );
};

export default PriceSlider;
