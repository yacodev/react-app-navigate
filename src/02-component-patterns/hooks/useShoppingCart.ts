import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces/interface';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }

      return { ...oldShoppingCart, [product.id]: { ...product, count } };
    });
  };

  return { shoppingCart, onProductCountChange };
};
