import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);

  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <span className="price">{price}</span>
      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
