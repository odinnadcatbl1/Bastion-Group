import "./ProductList.scss";
import ButtonCheckbox from "../ButtonCheckbox/ButtonCheckbox";
import ProductItem from "../ProductItem/ProductItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
    addGostFilter,
    deleteGostFilter,
} from "../../store/action-creators/filter";
import { IProductItem } from "../../types/types";

const ProductList: React.FC = () => {
    const { product, filter, type } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

    const filteredProducts: IProductItem[] = product.filter((product) => {
        if (filter.gost.length == 0) {
            if (filter.type.length == 0) {
                return true;
            } else if (filter.type.includes(product.type)) {
                return true;
            }
        } else if (filter.gost.includes(product.gost)) {
            if (filter.type.length == 0) {
                return true;
            } else if (filter.type.includes(product.type)) {
                return true;
            }
        } else {
            return false;
        }
    });

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

    console.log(filter.gost, filter.type);
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
                })}
            </div>
        </div>
    );
};

export default ProductList;
