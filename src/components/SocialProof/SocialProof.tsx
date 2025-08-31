'use client';
import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const SocialProofContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
    gap: theme.spacing(3),
  }
}));

const CompanyLogos = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '1216px',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide the single SVG on mobile
  }
}));

const MobileCompanyGrid = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    maxWidth: '400px',
    width: '100%',
  }
}));

const CompanyItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 1),
  gap: theme.spacing(1.5),
  minHeight: '60px',
}));

const CompanyIcon = styled('div')(({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'white',
  flexShrink: 0,
}));

const CompanyName = styled('span')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: '#101828',
  fontFamily: 'Inter, sans-serif',
}));

const SocialProof: React.FC = () => {
  const companies = [
    { name: 'Boltshift', icon: '⚡', bgColor: '#3B82F6' },
    { name: 'Lightbox', icon: '📦', bgColor: '#1F2937' },
    { name: 'FeatherDev', icon: '🪶', bgColor: '#10B981' },
    { name: 'Spherule', icon: '⚫', bgColor: '#8B5CF6' },
    { name: 'GlobalBank', icon: '🏦', bgColor: '#3B82F6' },
    { name: 'Nietzsche', icon: '☀️', bgColor: '#F59E0B' }
  ];

  return (
    <SocialProofContainer>
      <Typography 
        variant="body2" 
        sx={{ 
          color: '#475467', 
          fontSize: { xs: '14px', md: '16px' }, 
          fontWeight: 500,
          textAlign: 'center',
          px: { xs: 2, md: 0 }
        }}
      >
        Join 4,000+ companies already growing
      </Typography>
      
      {/* Desktop - Original SVG */}
      <CompanyLogos 
        src="/images/company-logos.svg" 
        alt="Company logos including Boltshift, Lightbox, FeatherDev, Spherule, GlobalBank, Nietzsche"
      />
      
      {/* Mobile - Grid Layout like screenshot */}
      <MobileCompanyGrid>
        <Grid container spacing={2}>
          {companies.map((company, index) => (
            <Grid item xs={6} key={index}>
              <CompanyItem>
                <CompanyIcon style={{ backgroundColor: company.bgColor }}>
                  {company.icon}
                </CompanyIcon>
                <CompanyName>{company.name}</CompanyName>
              </CompanyItem>
            </Grid>
          ))}
        </Grid>
      </MobileCompanyGrid>
    </SocialProofContainer>
  );
};

export default SocialProof;