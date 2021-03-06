import { useState } from "react";
import { IProductItem } from "../../types/types";
import {
    addToCart,
    setCartProductCount,
} from "../../store/action-creators/cart";

import favoriteIcon from "../../assets/svg/star-grey.svg";
import cartIcon from "../../assets/svg/cart-white.svg";
import "./ProductItem.scss";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ProductItem: React.FC<IProductItem> = (product: IProductItem) => {
    const cart = useTypedSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { name, price, gost, id } = product;

    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value) {
            setCartCount(+e.target.value);
        } else if (!e.target.value) {
            setCartCount(0);
        }
    };

    const onAddedToCart = () => {
        if (cartCount) {
            const cartProduct = cart.filter((cart) => {
                if (cart.id === id) {
                    return true;
                }
            });

            if (cartProduct.length !== 0) {
                dispatch(
                    setCartProductCount([
                        cartProduct[0].id,
                        cartProduct[0].count + cartCount,
                    ])
                );
                setCartCount(0);
            } else {
                dispatch(addToCart({ ...product, count: cartCount }));
                setCartCount(0);
            }
        }
    };

    const ProductItemTags: React.FC = () => {
        if (
            name.toLocaleLowerCase().indexOf("а") !== -1 &&
            name.toLocaleLowerCase().indexOf("о") !== -1
        ) {
            return (
                <div className="product__item-tags">
                    <div className="product__item-tag">Хит</div>
                    <div className="product__item-tag">Акция</div>
                </div>
            );
        } else if (name.toLocaleLowerCase().indexOf("о") !== -1) {
            return (
                <div className="product__item-tags">
                    <div className="product__item-tag">Хит</div>
                </div>
            );
        } else if (name.toLocaleLowerCase().indexOf("а") !== -1) {
            return (
                <div className="product__item-tags">
                    <div className="product__item-tag">Акция</div>
                </div>
            );
        } else {
            return <div className="product__item-tags"></div>;
        }
    };

    return (
        <div className="product__item">
            <ProductItemTags />
            <button className="product__item-favorite">
                <img src={favoriteIcon} alt="favorite" />В избранное
            </button>

            <div className="product__img-container">
                <img
                    className="product__img"
                    src="https://via.placeholder.com/200x200"
                    alt="product"
                />
            </div>

            <div className="product__item-gost">{gost}</div>

            <div className="product__item-name">{name}</div>
            <div className="product__price-container">
                <div className="product__item-price">{price} руб.</div>
                <div className="product__item-cart">
                    <button
                        className="cart__button"
                        id="add-btn"
                        onClick={() => setCartCount(cartCount + 1)}
                    >
                        +
                    </button>
                    <input
                        type="text"
                        className="cart__input"
                        value={cartCount}
                        onChange={updateCartCount}
                    />
                    <button
                        className="cart__button"
                        id="del-btn"
                        onClick={() =>
                            cartCount > 0 && setCartCount(cartCount - 1)
                        }
                    >
                        -
                    </button>
                </div>
            </div>

            <div className="product__item-actions">
                <button
                    className="product__cart-button"
                    onClick={onAddedToCart}
                >
                    <img src={cartIcon} alt="to cart" /> В корзину
                </button>
                <button className="product__about-button">Подробнее</button>
            </div>
        </div>
    );
};

export default ProductItem;
