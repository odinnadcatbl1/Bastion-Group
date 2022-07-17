import "./ProductList.scss";
import ButtonCheckbox from "../ButtonCheckbox/ButtonCheckbox";
import ProductItem from "../ProductItem/ProductItem";
import { IProductItem } from "../../types/types";

const ProductList: React.FC = () => {
    const product: IProductItem = {
        id: "3123",
        type: "type",
        name: "Опора тавровая хомутовая ТХ",
        price: 23102,
        gost: "ГОСТ 3231",
    };

    return (
        <div className="products">
            <form className="type-filter__form" action="/">
                <ButtonCheckbox id={"5"} label={"ГОСТ 231-01"} />
                <ButtonCheckbox id={"6"} label={"ГОСТ 231-01"} />
                <ButtonCheckbox id={"7"} label={"ГОСТ 231-01"} />
                <ButtonCheckbox id={"8"} label={"ГОСТ 231-01"} />
            </form>
            <div className="product__list">
                <ProductItem
                    key="1"
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    price={product.price}
                    gost={product.gost}
                />

                <ProductItem
                    key="2"
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    price={product.price}
                    gost={product.gost}
                />

                <ProductItem
                    key="3"
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    price={product.price}
                    gost={product.gost}
                />

                <ProductItem
                    key="4"
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    price={product.price}
                    gost={product.gost}
                />
            </div>
        </div>
    );
};

export default ProductList;
