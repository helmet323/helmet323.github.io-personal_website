import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function LastModified({ date }) {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          padding: 2,
        }}
      >
        <Typography sx={{ fontSize: '12px' }}>Last updated: {date}</Typography>
      </Box>
    </React.Fragment>
  );
}

LastModified.propTypes = {
  date: PropTypes.string,
};

export default LastModified;
