import React from 'react';
import { Box } from '@mui/material';
import Logo from './assets/Tommy.png';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

function Navbar() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '5rem',
          width: '100vw',
          top: 0,
          gap: 3,
          mt: '1rem',
        }}
      >
        <Box sx={{ m: 2, ml: '8rem', zIndex: 10 }}>
          <a href='/' style={{ color: 'inherit' }}>
            <img src={Logo} />
          </a>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '4rem',
            m: 2,
            mr: '8rem',
            zIndex: 10,
          }}
        >
          <Box sx={{ display: 'flex', gap: 4 }}>
            <a href='https://github.com/helmet323' style={{ color: 'inherit' }}>
              <GitHub />
            </a>
            <a
              href='https://www.linkedin.com/in/tommysu23/'
              style={{ color: 'inherit' }}
            >
              <LinkedIn />
            </a>
            <a href='mailto:t5su@uwaterloo.ca' style={{ color: 'inherit' }}>
              <Email />
            </a>
          </Box>

          <a href='/' style={{ color: 'inherit' }}>
            Home
          </a>
          <a href='/about' style={{ color: 'inherit' }}>
            About
          </a>
          <a href='/work' style={{ color: 'inherit' }}>
            Work
          </a>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Navbar;
