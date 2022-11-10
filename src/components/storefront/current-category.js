import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

function CurrentCategory(props) {
  if (props.category.listCategories[0] && props.category.activeCategory) {
    let currentCategory = props.category.listCategories.filter((el) => {
      return el.name === props.category.activeCategory;
    })[0];

    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1>{currentCategory.name}</h1>
          <p>{currentCategory.description}</p>
        </div>
      </>
    );
  }

  return <></>;
}

const mapStateToProps = (state) => ({
  category: state.categories,
});

export default connect(mapStateToProps)(CurrentCategory);
