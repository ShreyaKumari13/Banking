'use client';
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DemoIcon from '../icons/DemoIcon';

const HeroContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #53389E 0%, #7F56D9 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(15, 2, 0, 2), // No bottom padding to eliminate extra purple space
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(12, 2, 0, 2), // Increased top padding for mobile
    minHeight: 'calc(100vh - 64px)', // Account for mobile nav height
  }
}));

const DemoButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.grey[700],
  fontSize: '18px',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[300]}`,
  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  minWidth: '140px',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    boxShadow: '0px 2px 4px rgba(16, 24, 40, 0.1)'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '16px',
    padding: theme.spacing(1.5, 2),
  }
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  minWidth: '140px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    fontSize: '16px',
    padding: theme.spacing(1.5, 2),
  }
}));

const CreditCardsImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '1216px',
  height: 'auto',
  marginTop: '32px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginTop: '24px',
    padding: '0 16px'
  }
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Stack 
        spacing={4} 
        alignItems={{ xs: 'flex-start', md: 'center' }} 
        sx={{ 
          maxWidth: '768px', 
          width: '100%',
          textAlign: { xs: 'left', md: 'center' }
        }}
      >
        <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }} sx={{ width: '100%' }}>
          <Typography 
            sx={{ 
              color: '#e9d7fe', 
              fontSize: '16px', 
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              textAlign: { xs: 'left', md: 'center' },
              alignSelf: { xs: 'flex-start', md: 'center' }
            }}
          >
            Super. Simple. Banking.
          </Typography>
          
          <Typography 
            sx={{ 
              fontSize: { xs: '28px', sm: '36px', md: '64px' }, // Further reduced mobile font size
              fontWeight: 600,
              lineHeight: { xs: '36px', sm: '44px', md: '76px' }, // Adjusted line height
              letterSpacing: { xs: '-0.02em', md: '0' }, // -2% letter spacing for mobile
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              textAlign: { xs: 'left', md: 'center' },
              maxWidth: '768px',
              px: { xs: 1, md: 0 }, // Reduced padding for more space
              alignSelf: { xs: 'flex-start', md: 'center' }
            }}
          >
            Banking technology
            <br />
            that has your back.
          </Typography>
          
          <Typography 
            sx={{ 
              color: '#e9d7fe', 
              fontSize: { xs: '18px', md: '20px' }, 
              fontWeight: 400,
              fontFamily: 'Inter, sans-serif',
              textAlign: { xs: 'left', md: 'center' },
              maxWidth: '600px',
              px: { xs: 2, md: 0 },
              alignSelf: { xs: 'flex-start', md: 'center' }
            }}
          >
            Simple, transparent banking. No hidden fees and free overdrafts.
          </Typography>
        </Stack>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={1.5} 
          alignItems={{ xs: 'stretch', sm: 'center' }}
          sx={{ 
            width: { xs: '100%', sm: 'auto' }, 
            maxWidth: { xs: 'none', sm: 'none' },
            px: { xs: 2, md: 0 }
          }}
        >
          <SignUpButton>
            Sign up
          </SignUpButton>
          <DemoButton startIcon={<DemoIcon width={22} height={22} color="#344054" />}>
            Demo
          </DemoButton>
        </Stack>
      </Stack>

      <CreditCardsImage 
        src="/images/credit-cards.svg" 
        alt="3D credit cards arranged in fan pattern"
      />
    </HeroContainer>
  );
};

export default HeroSection;