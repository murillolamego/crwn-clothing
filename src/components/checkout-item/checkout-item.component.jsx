import { useDispatch, useSelector } from "react-redux";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { imageUrl, name, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

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
      <Price className="price">{price}</Price>
      <RemoveButton onClick={clearItemHandler} className="remove-button">
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
