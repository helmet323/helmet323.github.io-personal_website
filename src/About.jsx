import React from 'react';
import Working from './assets/Working.png';
import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function About({ about }) {
  const gradientTextStyles = {
    backgroundImage:
      'linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <React.Fragment>
      <Grid container sx={{ width: '80vw', margin: 'auto' }}>
        <Grid
          item
          sm={6}
          sx={{
            display: 'flex',
            placeItems: 'center',
            transform: 'translateY(-4rem)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
              gap: 2,
            }}
          >
            <Typography
              variant={'h6'}
              fontWeight='bold'
              style={gradientTextStyles}
            >
              About
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography variant='h2' sx={{ marginRight: 2 }}>
                I am a{' '}
              </Typography>
              <Typography sx={{ fontSize: '4.2rem', color: '#91C7B1' }}>
                developer!
              </Typography>
            </Box>
            <Typography marginRight={'4rem'}>{about}</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} sx={{ margin: 0, padding: 0 }}>
          <img
            src={Working}
            alt=''
            style={{ width: '90%', height: 'auto', margin: '4rem 0 0 0' }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

About.propTypes = {
  about: PropTypes.string,
};

export default About;
