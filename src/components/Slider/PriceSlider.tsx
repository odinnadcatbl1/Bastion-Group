import { useState } from "react";
import { Slider } from "@mui/material";

import "./PriceSlider.scss";

const PriceSlider: React.FC = () => {
    const [priceValues, setPriceValues] = useState([0, 100]);

    const updatePriceSlider = (e: any, item: any) => {
        setPriceValues(item);
    };

    const updatePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "price-input-1") {
            setPriceValues([+e.target.value, priceValues[1]]);
        } else {
            setPriceValues([priceValues[0], +e.target.value]);
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
                        placeholder="200"
                        value={priceValues[0]}
                        onChange={updatePriceInput}
                    />
                </label>
                <label className="filter__price-label">
                    <span className="filter__price-text">до</span>
                    <input
                        className="filter__price-input"
                        id="price-input-2"
                        placeholder="199"
                        value={priceValues[1]}
                        onChange={updatePriceInput}
                    />
                </label>
            </div>

            <div className="slider">
                <Slider value={priceValues} onChange={updatePriceSlider} />
            </div>
        </div>
    );
};

export default PriceSlider;
