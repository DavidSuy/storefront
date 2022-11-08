import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function Products(props) {
  let listProducts = props.products.displayedProducts.map((el, idx) => {
    return (
      <Card key={idx} sx={{ maxWidth: 345 }}>
        <CardMedia
          component={'img'}
          alt={el.name}
          height={'140'}
          image={el.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={'div'}>
            {el.name}
          </Typography>
          <Typography>{el.description}</Typography>
        </CardContent>
        <CardActions>
          <Button>Add to Cart</Button>
          <Button>View Details</Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <div style={{ display: 'flex' }}>{listProducts}</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Products);
