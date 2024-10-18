import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces/interface';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...oldShoppingCart, [product.id]: productInCart };
      }
      const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
      return newShoppingCart;
    });

    /* if (count === 0) {
        const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }

      return { ...oldShoppingCart, [product.id]: { ...product, count } }; */
  };

  return { shoppingCart, onProductCountChange };
};
