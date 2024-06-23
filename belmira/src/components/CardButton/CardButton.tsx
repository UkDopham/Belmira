import React from 'react';
import { Typography, Box, BoxProps, IconButton } from '@mui/material';

interface CardButtonProps extends BoxProps {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
      <IconButton
        sx={{ color: 'white' }}
        onClick={onClick}
      >
        <Icon />
      </IconButton>
      <Typography variant="caption" sx={{ color: 'white', mt: 1, textAlign: 'center', width: '100%' }}>
        {label}
      </Typography>
    </Box>
  );
};

export default CardButton;