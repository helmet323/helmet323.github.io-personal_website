import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Wave from './assets/Wave.png';
import SmallGreenTriangle from './assets/SmallGreenTriangle.png';
import SmallRedTriangle from './assets/SmallRedTriangle.png';
import LargeRedTriangle from './assets/LargeRedTriangle.png';
import PropTypes from 'prop-types';

function Home({ introduction }) {
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
      <Box>
        <img
          src={SmallGreenTriangle}
          alt=''
          style={{
            transform: 'rotate(12deg)',
            position: 'absolute',
            right: '15rem',
            top: '-4rem',
            width: '15.5%',
            zIndex: '-1',
          }}
        />
        <img
          src={SmallRedTriangle}
          alt=''
          style={{
            transform: 'rotate(30deg)',
            position: 'absolute',
            top: '60vh',
            zIndex: '-1',
            width: '20%',
          }}
        />
        <img
          src={LargeRedTriangle}
          alt=''
          style={{
            transform: 'rotate(80deg)',
            position: 'absolute',
            zIndex: '-1',
            top: '35vh',
            right: '-6rem',
            width: '50%',
          }}
        />

        <Grid container sx={{ width: '80vw', margin: 'auto' }}>
          <Grid item sm={4.5} sx={{ margin: 0, padding: 0 }}>
            <img
              src={Wave}
              alt=''
              style={{
                width: '100%',
                height: 'auto',
                margin: '4rem 0 0 0',
              }}
            />
          </Grid>
          <Grid
            item
            sm={1.5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Divider
              orientation='vertical'
              sx={{
                height: '40%',
                border: '1px solid gray',
                transform: 'translateY(-4rem)',
              }}
            />
          </Grid>
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
                Home
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography variant='h2'>Greetings, </Typography>
                <Typography sx={{ fontSize: '4.2rem', color: '#91C7B1' }}>
                  wanderer!
                </Typography>
              </Box>
              <Typography>{introduction}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

Home.propTypes = {
  introduction: PropTypes.string,
};

export default Home;
