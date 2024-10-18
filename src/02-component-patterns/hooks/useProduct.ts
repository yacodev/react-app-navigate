import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interface';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newCounter = Math.max(counter + value, 0);
    setCounter(newCounter);
    onChange && onChange({ count: newCounter, product });
  };
  return { counter, increaseBy };
};
