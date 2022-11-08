// import * as React from 'react';
import { AppBar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar component={'nav'}>
      <Typography
        variant='h6'
        component={'div'}
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Store Front
      </Typography>
    </AppBar>
  );
}
