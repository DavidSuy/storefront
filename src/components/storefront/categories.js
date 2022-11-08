import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

function Categories(props) {
  // console.log(props);
  // let { displayName, description } = props.category.listCategories.filter(
  //   (val, idx) => {
  //     return val.normalizedName === props.category.activeCategory;
  //   }
  // )[0];
  let categorylist = props.categories.listCategories.map((el, idx) => {
    // console.log(el.normalizedName);
    return (
      <Button
        key={idx}
        onClick={() => props.changeActiveCategory(el.normalizedName)}
      >
        {el.displayName}
      </Button>
    );
  });

  return (
    <div style={{ padding: '30px' }}>
      <h2>Category</h2>
      <span>
        {/* <Button>Electronic</Button>|<Button>food</Button> */}
        {categorylist}
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  changeActiveCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
