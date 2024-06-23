import React, { useState } from 'react';
import { Typography, Box, BoxProps } from '@mui/material';

interface CardsLeftCounterProps extends BoxProps {
    cardsLeft: number,
}

const CardsLeftCounter: React.FC<CardsLeftCounterProps> = ({ cardsLeft }) => {
    return (
        <Box>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                Cards Left: {cardsLeft}
            </Typography>
        </Box>
    );
};

export default CardsLeftCounter;