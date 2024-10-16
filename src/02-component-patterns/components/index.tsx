import { ProductCardHOCProps } from '../interfaces/interface';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export * from './ProductButtons';
export * from './ProductCard';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Buttons: ProductButtons,
  Title: ProductTitle,
});
