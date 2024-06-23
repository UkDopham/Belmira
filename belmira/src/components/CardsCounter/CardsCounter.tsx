import React, { useState } from 'react';
import { Paper, PaperProps, Typography, Box, BoxProps } from '@mui/material';

interface CardsCounterProps extends BoxProps {
    incorrectCount : number,
    correctCount : number,
}

const CardsCounter: React.FC<CardsCounterProps> = ({incorrectCount, correctCount}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <Typography variant="body1" sx={{ color: 'white' }}>
            Incorrect: {incorrectCount}
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
            Correct: {correctCount}
        </Typography>
    </Box>
  );
};

export default CardsCounter;