import React, { useState, useEffect } from 'react';
import { Box, BoxProps, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Card from '../Card/Card';
import CardsCounter from '../CardsCounter/CardsCounter';
import CardsLeftCounter from '../CardsLeftCounter/CardsLeftCounter';
import CardButton from '../CardButton/CardButton';

export interface CardItem {
    text: string;
    answerText: string;
    flag: string;
    answerFlag: string;
}

interface CardBoxProps extends BoxProps {
    cards?: CardItem[];
    fromLanguage: string;
    toLanguage: string;
}

const CardBox: React.FC<CardBoxProps> = ({ cards = [], fromLanguage, toLanguage }) => {
    const [currentCards, setCurrentCards] = useState(cards);
    const [cardsLeftCount, setCardsLeftCount] = useState(cards.length);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [cardBgColor, setCardBgColor] = useState('white');
    const handleCorrect = () => {
        if (cardsLeftCount === 0) {
            console.log("No cards left");
            return;
        }
        setCorrectCount(prevCount => prevCount + 1);
        setCardBgColor('green');
        setTimeout(() => setCardBgColor('white'), 500);
        setCardsLeftCount(prevCount => prevCount - 1);
        
        setCurrentCards(prevCards => {
            const newCards = prevCards.filter((_, index) => index !== currentIndex);
            if (newCards.length === 0) {
                setCurrentIndex(0);
            } else if (currentIndex >= newCards.length) {
                setCurrentIndex(newCards.length - 1);
            }
            return newCards;
        });
    };

    const handleIncorrect = () => {
        if (cardsLeftCount === 0) {
            console.log("No cards left");
            return;
        }
        
        setIncorrectCount(prevCount => prevCount + 1);
        setCardBgColor('red');
        setTimeout(() => setCardBgColor('white'), 500);
        
        setCurrentIndex(prevIndex => {
            if (prevIndex === currentCards.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const currentCard = currentCards[currentIndex];

    return (
        <Box
            sx={{
                backgroundColor: '#b71540',
                borderRadius: '24px',
                padding: '40px',
                width: '400px',
                height: '520px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <CardsLeftCounter cardsLeft={cardsLeftCount} />
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                {fromLanguage} to {toLanguage}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <CardButton icon={ArrowBackIosIcon} label='Incorrect' onClick={handleIncorrect} />
                {currentCard ? (
                    <Card
                        text={currentCard.text}
                        answerText={currentCard.answerText}
                        flag={currentCard.flag}
                        answerFlag={currentCard.answerFlag}
                        backgroundColor={cardBgColor}
                    />
                ) : (
                    <Typography variant="h6" sx={{ color: 'white' }}>No cards available</Typography>
                )}
                <CardButton icon={ArrowForwardIosIcon} label='Correct' onClick={handleCorrect} />
            </Box>
            <CardsCounter incorrectCount={incorrectCount} correctCount={correctCount} />
        </Box>
    );
};

export default CardBox;