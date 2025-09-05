import { useState } from 'react';
import LandingPage from './components/LandingPage';
import IntroScreen from './components/IntroScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

type Screen = 'landing' | 'intro' | 'quiz' | 'results';

interface QuizResults {
  score: number;
  totalQuestions: number;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);

  const handleStartQuiz = () => {
    setCurrentScreen('intro');
  };

  const handleBeginQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (results: QuizResults) => {
    setQuizResults(results);
    setCurrentScreen('results');
  };

  const handleRetakeQuiz = () => {
    setQuizResults(null);
    setCurrentScreen('intro');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onStartQuiz={handleStartQuiz} />;
      case 'intro':
        return <IntroScreen onStartQuiz={handleBeginQuiz} />;
      case 'quiz':
        return <QuizScreen onQuizComplete={handleQuizComplete} />;
      case 'results':
        return (
          <ResultsScreen
            score={quizResults?.score || 0}
            totalQuestions={quizResults?.totalQuestions || 10}
            onRestart={handleRetakeQuiz}
          />
        );
      default:
        return <LandingPage onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#FFF7EE', minHeight: '100vh' }}>
      {renderScreen()}
    </div>
  );
}

export default App;
