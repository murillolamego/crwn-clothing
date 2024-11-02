import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import {
  selectCartItemsCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemsCount = useSelector(selectCartItemsCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
