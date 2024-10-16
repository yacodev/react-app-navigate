import React from 'react';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components/';

const product = {
  id: 1,
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
