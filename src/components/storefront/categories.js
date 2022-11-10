import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';
import { filterProduct } from '../../store/products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesApi } from '../../store/categories';

function Categories(props) {
  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategoriesApi());
  // }, []);

  let categoryList = props.categories.listCategories.map((el, idx) => {
    return (
      <Button
        key={idx}
        onClick={() => {
          props.changeActiveCategory(el.name);
          props.filterProduct(el.name);
        }}
      >
        {el.name}
      </Button>
    );
  });

  return (
    <div style={{ padding: '30px' }}>
      <h2>Category</h2>
      <span>{categoryList}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  changeActiveCategory,
  filterProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
