import "./ProductList.scss";
import ButtonCheckbox from "../ButtonCheckbox/ButtonCheckbox";
import ProductItem from "../ProductItem/ProductItem";
import { IProductItem } from "../../types/types";

const ProductList: React.FC = () => {
    const product: IProductItem = {
        id: "3123",
        type: {
            name: "proverka",
            id: "1",
            isChecked: true,
        },
        name: "Опора тавровая хомутовая ТХ",
        price: 23102,
        gost: "ГОСТ 3231",
    };

    return (
        <div className="products">
            <form className="type-filter__form" action="/">
                <ButtonCheckbox
                    id={"5"}
                    label={"ГОСТ 231-01"}
                    isChecked={true}
                    onChange={(e) => {
                        console.log(e);
                    }}
                />
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
                    name={"Трубы алюминиевые"}
                    price={product.price}
                    gost={product.gost}
                />

                <ProductItem
                    key="3"
                    id={product.id}
                    type={product.type}
                    name={"Ангары"}
                    price={product.price}
                    gost={product.gost}
                />

                <ProductItem
                    key="4"
                    id={product.id}
                    type={product.type}
                    name={"Опора"}
                    price={product.price}
                    gost={product.gost}
                />
            </div>
        </div>
    );
};

export default ProductList;
