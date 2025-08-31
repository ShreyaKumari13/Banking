'use client';
import React from 'react';
import { AppBar, Stack, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import UntitledLogo from '../icons/UntitledLogo';
import DropdownIcon from '../icons/DropdownIcon';

const NavigationWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: theme.spacing(2.5, 2),
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2, 2),
  }
}));

const NavigationContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1216px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '56px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
  }
}));

const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}));

const MainNavSection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '40px', // 40px gap as per element-styles #n_68439
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    gap: '16px',
  }
}));

const NavItems = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '32px', // 32px gap as per element-styles #n_1dc91
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide navigation items on mobile
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'Inter, sans-serif',
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  minHeight: 'auto',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    padding: theme.spacing(0.5, 1)
  }
}));

const DropdownSection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '8px', // 8px gap as per element-styles #n_1e70e, #n_881ae
  flexDirection: 'row',
  cursor: 'pointer',
  '&:hover .nav-button': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    padding: theme.spacing(0.5, 1)
  }
}));

const AuthSection = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '12px', // 12px gap as per element-styles #n_bfddd
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide auth buttons on mobile, replace with hamburger
  }
}));

const HamburgerMenu = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer',
    '& span': {
      width: '20px',
      height: '2px',
      backgroundColor: '#ffffff',
      borderRadius: '1px',
    }
  }
}));

const AuthButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'Inter, sans-serif',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: '8px',
  minHeight: 'auto',
  '&.login': {
    color: '#ffffff',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
  },
  '&.signup': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
  }
}));

const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavigationContainer>
        <MainNavSection>
          <LogoSection>
            <img 
              src="/images/Logomark.png" 
              alt="Untitled UI Logo" 
              width={24} 
              height={24}
              style={{ objectFit: 'contain' }}
            />
            <Typography 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 600, 
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1
              }}
            >
              Untitled UI
            </Typography>
          </LogoSection>
          
          <NavItems>
            <NavButton>Home</NavButton>
            
            <DropdownSection>
              <NavButton className="nav-button">Products</NavButton>
              <DropdownIcon width={12} height={7} color="#ffffff" />
            </DropdownSection>
            
            <DropdownSection>
              <NavButton className="nav-button">Resources</NavButton>
              <DropdownIcon width={12} height={7} color="#ffffff" />
            </DropdownSection>
            
            <NavButton>Pricing</NavButton>
          </NavItems>
        </MainNavSection>

        <AuthSection>
          <AuthButton className="login">Log in</AuthButton>
          <AuthButton className="signup">Sign up</AuthButton>
        </AuthSection>

        <HamburgerMenu>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </NavigationContainer>
    </NavigationWrapper>
  );
};

export default Navigation;