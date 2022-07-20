import "./ProductList.scss";
import ButtonCheckbox from "../ButtonCheckbox/ButtonCheckbox";
import ProductItem from "../ProductItem/ProductItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
    addGostFilter,
    deleteGostFilter,
} from "../../store/action-creators/filter";
import { FilteredProductsPropTypes } from "../../types/types";

const ProductList: React.FC<FilteredProductsPropTypes> = ({
    filteredProducts,
}) => {
    const { product, filter } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

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
                {filteredProducts.map((product) => {
                    if (
                        product.price >= filter.price[0] &&
                        product.price <= filter.price[1]
                    ) {
                        console.log("ok");
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
