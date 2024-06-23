import React from 'react';
import { Box } from '@mui/material';
import CardBox from './components/CardBox/CardBox';
import { CardItem } from './components/CardBox/CardBox';

const cardItems: CardItem[] = [
  { text: "Bonjour", answerText: "こんにちは", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Au revoir", answerText: "さようなら", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Merci", answerText: "ありがとう", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "S'il vous plaît", answerText: "おねがいします", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Excusez-moi", answerText: "すみません", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Comment allez-vous ?", answerText: "おげんきですか", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Je m'appelle", answerText: "わたしのなまえは", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Enchanté", answerText: "はじめまして", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Bon appétit", answerText: "いただきます", flag: "🇫🇷", answerFlag: "🇯🇵" },
  { text: "Bonne nuit", answerText: "おやすみなさい", flag: "🇫🇷", answerFlag: "🇯🇵" },
];

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>

      <CardBox
        cards={cardItems}
        fromLanguage="French"
        toLanguage="Japanese"
      />
    </Box>
  );
}

export default App;