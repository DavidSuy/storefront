import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function Products() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component={'img'}
          alt={'pikachu'}
          height={'140'}
          image={'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={'div'}>
            Pikachu
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eius
            voluptatem porro, dolore suscipit iusto quibusdam veritatis, fuga
            sunt voluptates rerum nisi doloremque itaque, praesentium
            accusantium modi eaque repudiandae minus!
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Add to Cart</Button>
          <Button>View Details</Button>
        </CardActions>
      </Card>
    </>
  );
}
