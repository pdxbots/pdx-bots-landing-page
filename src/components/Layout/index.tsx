import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/system';
import { Button, ButtonGroup } from '@mui/material';
import useWindowSize from '@/utils/useWindowSize';
import RenderIf from '@/utils/RenderIf';
import HamburgerDropDown from '@/components/HambergerDropdown';
import {
  colors,
  mediaQueriesThresholds,
  headerNavigation
} from '@/constants';

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
          opacity: '.8',
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
              color: colors.text,
              opacity: '1',
              paddingRight: '2rem'
            }}>
            <RenderIf isTrue={width && width > mediaQueriesThresholds.mobile}>
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
            </RenderIf>
            <RenderIf isTrue={width && width <= mediaQueriesThresholds.mobile}>
              <HamburgerDropDown headerNavigation={headerNavigation}/>
            </RenderIf>           
          </Box>
        </Box>
      </header>
      <main>{children}</main>
      <footer/>
    </div>
  );
};

export default Layout;