import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import {
  ProductCardsProps,
  ProductContextProps,
} from '../interfaces/interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardsProps) => {
  const { increaseBy, counter } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
