'use client';
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CTAContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(0, 2, 8, 2),
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 1, 6, 1),
  }
}));

const CTACard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '24px',
  boxShadow: '0px 8px 8px rgba(16, 24, 40, 0.03), 0px 20px 24px rgba(16, 24, 40, 0.08)',
  display: 'flex',
  overflow: 'hidden',
  maxWidth: '1216px',
  width: '100%',
  minHeight: '400px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    minHeight: 'auto',
    borderRadius: '16px',
  }
}));

const ContentSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 3),
    gap: theme.spacing(4),
  }
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: '400px',
  backgroundImage: 'url(/images/office-collaboration.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('md')]: {
    minHeight: '200px',
  }
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.grey[700],
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px',
  border: `1px solid ${theme.palette.grey[300]}`,
  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: theme.palette.common.white,
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: theme.spacing(1.5, 3),
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
}));

const CallToAction: React.FC = () => {
  return (
    <CTAContainer>
      <CTACard>
        <ContentSection>
          <Stack spacing={2.5}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '28px', md: '36px' }, 
                fontWeight: 600, 
                letterSpacing: '-0.72px',
                color: '#ffffff',
                textAlign: { xs: 'left', md: 'left' }
              }}
            >
              Give us a shot
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '20px', 
                fontWeight: 400,
                color: '#e9d7fe',
                maxWidth: '500px'
              }}
            >
              Join over 4,000+ startups already growing with Untitled.
            </Typography>
          </Stack>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={1.5}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            <GetStartedButton sx={{ width: { xs: '100%', sm: 'auto' } }}>
              Get started
            </GetStartedButton>
            <LearnMoreButton sx={{ width: { xs: '100%', sm: 'auto' } }}>
              Learn more
            </LearnMoreButton>
          </Stack>
        </ContentSection>

        <ImageSection />
      </CTACard>
    </CTAContainer>
  );
};

export default CallToAction;