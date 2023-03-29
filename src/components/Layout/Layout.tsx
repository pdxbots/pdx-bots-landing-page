import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/system';
import { Button, ButtonGroup } from '@mui/material';
import { headerNavigation } from '../../constants/constants'
import useWindowSize from '@/utils/useWindowSize';
import HamburgerDropDown from '../HambergerDropdown/HambergerDropDown';


const Layout = ({ children }: any) => {
  const { width } = useWindowSize();
  return (
    <div>
      <header>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          color: 'white',
          backgroundColor: 'grey',
          opacity: '0.6',
          fontFamily: 'Bungee Hairline'
        }}>
          <Link href='/'>
              <h1>PDX Bots</h1>
          </Link>
          <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              alignItems: 'center',
              color:'#16FF00',
              opacity: '1',
              paddingRight: '2rem'
            }}>
            <ButtonGroup>
              {headerNavigation.map((link) => (
                <Link href={link.href} key={link.label}>
                  <Button 
                    variant='text'
                    sx={{ color:'#16FF00', fontFamily: 'Bungee Hairline', fontWeight:400}}>
                      {link.label}
                  </Button>
                </Link>
              ))}
            </ButtonGroup>
          </Box>
          {/* <HamburgerDropDown/> */}
        </Box>
      </header>
      <main>{children}</main>
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;