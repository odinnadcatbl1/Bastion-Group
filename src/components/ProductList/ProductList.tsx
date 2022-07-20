import "./ProductList.scss";
import ButtonCheckbox from "../ButtonCheckbox/ButtonCheckbox";
import ProductItem from "../ProductItem/ProductItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
    addGostFilter,
    deleteGostFilter,
} from "../../store/action-creators/filter";
import { useState } from "react";

const ProductList: React.FC = () => {
    const { product, filter, type } = useTypedSelector((state) => state);
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([...product]);

    const gosts = [
        ...new Set(
            product.map((product) => {
                return product.gost;
            })
        ),
    ];

    const onButtonCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(addGostFilter(e.target.id));
        } else {
            dispatch(deleteGostFilter(e.target.id));
        }
    };

    return (
        <div className="products">
            <form className="type-filter__form" action="/">
                {gosts.map((gost) => {
                    return (
                        <ButtonCheckbox
                            key={gost}
                            id={gost}
                            label={gost}
                            onChange={onButtonCheckboxChange}
                        />
                    );
                })}
            </form>
            <div className="product__list">
                {product.map((product) => {
                    if (
                        filter.gost.length &&
                        filter.gost.indexOf(product.gost) != -1
                    ) {
                        return (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                type={product.type}
                                name={product.name}
                                price={product.price}
                                gost={product.gost}
                            />
                        );
                    } else if (!filter.gost.length) {
                        return (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                type={product.type}
                                name={product.name}
                                price={product.price}
                                gost={product.gost}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ProductList;
