import React, { useState, useEffect } from 'react';
import { Paper, PaperProps, Typography, Box } from '@mui/material';

interface CardProps extends PaperProps {
  text?: string;
  answerText?: string;
  flag?: string;
  answerFlag?: string;
  backgroundColor?: string;
  resetAnswer?: boolean;
}

const Card: React.FC<CardProps> = ({
  text = "Hello",
  answerText = "Bonjour",
  flag = "🇬🇧",
  answerFlag = "🇫🇷",
  backgroundColor = 'white'
}) => {
  useEffect(() => {
    setShowAnswer(false);
  }, [text, answerText, flag, answerFlag]);
  
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <Paper
      elevation={3}
      onClick={handleClick}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: '16px',
        padding: '20px',
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.5s ease',
        cursor: 'pointer',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography variant="h4" component="span">
          {showAnswer ? answerFlag : flag}
        </Typography>
        <Typography variant="h6" component="div">
          {showAnswer ? answerText : text}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        {showAnswer ? "Click to hide answer" : "Click to show answer"}
      </Typography>
    </Paper>
  );
};

export default Card;