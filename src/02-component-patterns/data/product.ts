import { Product } from '../interfaces/interface';

const product = {
  id: 1,
  title: 'Coffee Mug',
  img: './coffee-mug.png',
};

const product2 = {
  id: 2,
  title: 'Coffee Mug -meme',
  img: './coffee-mug-2.png',
};

export const products: Product[] = [product, product2];
