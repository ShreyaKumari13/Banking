import React from 'react';
import { Box } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import HeroSection from '../Hero/HeroSection';
import SocialProof from '../SocialProof/SocialProof';
import CallToAction from '../CallToAction/CallToAction';

const LandingPage: React.FC = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Navigation />
      <HeroSection />
      <SocialProof />
      <CallToAction />
    </Box>
  );
};

export default LandingPage;