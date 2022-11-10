import SimpleCart from '../cart/simplecart';
import Categories from './categories';
import CurrentCategory from './current-category';
import Products from './products';
import { useDispatch } from 'react-redux';
import { getCategoriesApi } from '../../store/categories';
import { useEffect } from 'react';
import { getProductApi } from '../../store/products';

export default function StoreFront() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesApi());
    dispatch(getProductApi());
  }, []);
  return (
    <>
      <div
        className='cart_category_container'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Categories />
        <SimpleCart />
      </div>
      <CurrentCategory />
      <Products />
    </>
  );
}
