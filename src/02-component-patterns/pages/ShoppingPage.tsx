import React from 'react';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components/';
import '../styles/custom-styles.css';

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
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-img' />
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-img' />
          <ProductCard.Title className='text-white' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70d1f8' }}>
          <ProductCard.Image
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductCard.Title style={{ fontWeight: 'bold' }} />
          <ProductCard.Buttons
            style={{ display: 'flex', justifyContent: 'end' }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
