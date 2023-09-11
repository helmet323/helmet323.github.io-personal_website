import {
  Box,
  Card,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

function Work({ projects }) {
  const gradientTextStyles = {
    backgroundImage:
      'linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  };

  const [flipState, setFlipState] = useState({
    'Grapple Ballkour': false,
    'Chore Matcher': false,
    'Overwatch Tierlist': false,
    'Connect the Shots': false,
  });

  const flip = (projectName) => {
    setFlipState({ ...flipState, [projectName]: !flipState[projectName] });
  };

  return (
    <React.Fragment>
      <Box sx={{ margin: 8, marginTop: 4 }}>
        <Typography
          variant={'h6'}
          fontWeight='bold'
          style={gradientTextStyles}
          sx={{ width: '60vw', margin: 'auto', marginBottom: 3 }}
        >
          Work
        </Typography>
        <ImageList
          sx={{
            width: '60vw',
            margin: 'auto',
            overflowY: 'auto',
            maxHeight: 520,
          }}
          cols={3}
          rowHeight={250}
        >
          {projects.map((item) => (
            <React.Fragment key={item.image}>
              <Box
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  ':hover': {
                    transform: 'scale(0.95)',
                  },
                }}
              >
                <ReactCardFlip
                  isFlipped={flipState[item.name]}
                  flipDirection='horizontal'
                >
                  <Card onClick={() => flip(item.name)}>
                    <ImageListItem>
                      <img
                        src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading='lazy'
                      />
                      <ImageListItemBar title={item.name} />
                    </ImageListItem>
                  </Card>
                  <Card onClick={() => flip(item.name)} sx={{ height: 250 }}>
                    <Typography
                      sx={{
                        padding: 2,
                        backgroundColor: 'gray',
                        color: 'white',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Box
                      sx={{
                        padding: 2,
                        height: '65%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography>{item.description}</Typography>
                      <Box>
                        <Typography>Check out the project: </Typography>
                        <a href={item.url}>Link</a>
                      </Box>
                    </Box>
                  </Card>
                </ReactCardFlip>
              </Box>
            </React.Fragment>
          ))}
        </ImageList>
      </Box>
    </React.Fragment>
  );
}

Work.propTypes = {
  projects: PropTypes.array,
};

export default Work;
