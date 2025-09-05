import React, { useState, useEffect } from 'react';
import questions from '../data/questions.json';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizScreenProps {
  onQuizComplete: (results: { score: number; totalQuestions: number }) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onQuizComplete }) => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState<{ show: boolean; isCorrect: boolean; explanation: string }>({ show: false, isCorrect: false, explanation: '' });

  useEffect(() => {
    // Randomly select 10 questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    // Randomize answer options for each question
    const questionsWithShuffledOptions = selected.map(q => {
      const optionsWithIndex = q.options.map((option, index) => ({ option, originalIndex: index }));
      const shuffledOptions = optionsWithIndex.sort(() => 0.5 - Math.random());
      
      // Update correct answer to match new option position
      const newCorrectAnswer = shuffledOptions.findIndex(item => item.originalIndex === q.correctAnswer);
      
      return {
        ...q,
        options: shuffledOptions.map(item => item.option),
        correctAnswer: newCorrectAnswer
      };
    });
    
    setSelectedQuestions(questionsWithShuffledOptions);
  }, []);

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (!currentQuestion) return;
    
    const questionId = currentQuestion.id;
    // Prevent changing answer if already answered
    if (userAnswers[questionId] !== undefined) return;
    
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    // Show immediate feedback
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    setAnswerFeedback({
      show: true,
      isCorrect,
      explanation: currentQuestion.explanation
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
      setAnswerFeedback({ show: false, isCorrect: false, explanation: '' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowExplanation(false);
      setAnswerFeedback({ show: false, isCorrect: false, explanation: '' });
    }
  };

  // Check if current question is answered and show feedback
  useEffect(() => {
    if (currentQuestion && userAnswers[currentQuestion.id] !== undefined) {
      const userAnswer = userAnswers[currentQuestion.id];
      const isCorrect = userAnswer === currentQuestion.correctAnswer;
      setAnswerFeedback({
        show: true,
        isCorrect,
        explanation: currentQuestion.explanation
      });
    } else {
      setAnswerFeedback({ show: false, isCorrect: false, explanation: '' });
    }
  }, [currentQuestion, userAnswers]);

  const handleSubmitQuiz = () => {
    let score = 0;
    
    selectedQuestions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      const correctAnswer = question.correctAnswer;
      
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
    
    onQuizComplete({ score, totalQuestions: selectedQuestions.length });
  };

  const isAnswered = (questionId: number) => {
    return userAnswers[questionId] !== undefined;
  };

  const allQuestionsAnswered = selectedQuestions.every(q => isAnswered(q.id));

  if (selectedQuestions.length === 0) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#FFF7EE'
      }}>
        <div style={{ fontSize: '18px', color: '#333' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#FFF7EE', 
      padding: 'clamp(10px, 3vw, 20px)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {/* Header with back arrow and progress */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: 'clamp(20px, 4vw, 30px)',
          gap: 'clamp(10px, 3vw, 20px)',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 'clamp(20px, 4vw, 24px)',
              cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentQuestionIndex === 0 ? 0.3 : 1,
              color: '#333',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ←
          </button>
          
          {/* Progress circles with connecting lines */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            flex: 1, 
            justifyContent: 'center',
            position: 'relative',
            maxWidth: '400px',
            margin: '0 auto',
            minHeight: '44px',
            overflow: 'hidden'
          }}>
            {selectedQuestions.map((_, index) => {
              let circleColor = '#d1d5db'; // gray for unanswered
              let lineColor = '#d1d5db'; // gray for incomplete
              
              if (index < currentQuestionIndex) {
                circleColor = '#10b981'; // green for completed
                lineColor = '#10b981'; // green line for completed
              } else if (index === currentQuestionIndex) {
                circleColor = '#3b82f6'; // blue for current
              }
              
              return (
                <React.Fragment key={index}>
                  <div
                    style={{
                      width: 'clamp(16px, 3vw, 20px)',
                      height: 'clamp(16px, 3vw, 20px)',
                      borderRadius: '50%',
                      backgroundColor: circleColor,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 2,
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      minWidth: '16px',
                      minHeight: '16px'
                    }}
                  />
                  {/* Connecting line */}
                  {index < selectedQuestions.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: '3px',
                        backgroundColor: index < currentQuestionIndex ? lineColor : '#d1d5db',
                        transition: 'background-color 0.3s ease',
                        margin: '0 4px',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Question card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: 'clamp(12px, 3vw, 20px)',
          padding: 'clamp(24px, 6vw, 48px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
          marginBottom: 'clamp(24px, 5vw, 40px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: 'clamp(18px, 4vw, 24px)',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0,
              lineHeight: '1.3',
              flex: 1,
              paddingRight: 'clamp(12px, 3vw, 20px)',
              letterSpacing: '-0.025em'
            }}>
              {currentQuestion.question}
            </h2>
            
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: showExplanation 
                  ? 'linear-gradient(135deg, #ee7441 0%, #d65a2f 100%)' 
                  : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                color: showExplanation ? 'white' : '#64748b',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: showExplanation 
                  ? '0 8px 20px rgba(238, 116, 65, 0.3)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
                transform: showExplanation ? 'scale(1.05)' : 'scale(1)'
              }}
              title="Show explanation"
              onMouseOver={(e) => {
                if (!showExplanation) {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseOut={(e) => {
                if (!showExplanation) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              ℹ
            </button>
          </div>



          {showExplanation && (
            <div style={{
              marginBottom: '30px',
              padding: '20px',
              backgroundColor: '#065f46',
              borderRadius: '8px',
              position: 'relative'
            }}>
              <button
                onClick={() => setShowExplanation(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  padding: '0',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>
              <h3 style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 10px 0'
              }}>
                Explanation
              </h3>
              <p style={{
                color: 'white',
                fontSize: '14px',
                margin: 0,
                lineHeight: '1.5'
              }}>
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 16px)' }}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion.id] === index;
              const isAnswered = userAnswers[currentQuestion.id] !== undefined;
              
              return (
                <label
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 'clamp(16px, 4vw, 20px) clamp(20px, 5vw, 24px)',
                    border: `2px solid ${isSelected ? '#ee7441' : '#e2e8f0'}`,
                    borderRadius: 'clamp(12px, 3vw, 16px)',
                    cursor: isAnswered ? 'not-allowed' : 'pointer',
                    backgroundColor: isSelected ? '#fef7f0' : 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected 
                      ? '0 8px 25px rgba(238, 116, 65, 0.15)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transform: isSelected ? 'translateY(-2px)' : 'translateY(0)',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '44px',
                    opacity: isAnswered && !isSelected ? 0.6 : 1
                  }}
                  onMouseOver={(e) => {
                    if (!isSelected && !isAnswered) {
                      e.currentTarget.style.borderColor = '#fbbf24';
                      e.currentTarget.style.backgroundColor = '#fffbeb';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSelected && !isAnswered) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                    }
                  }}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    checked={isSelected}
                    onChange={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                    style={{ 
                      marginRight: 'clamp(12px, 3vw, 16px)', 
                      transform: 'scale(1.3)',
                      accentColor: '#ee7441',
                      minWidth: '18px',
                      minHeight: '18px'
                    }}
                  />
                  <span style={{ 
                    color: isSelected ? '#1f2937' : '#374151', 
                    fontSize: 'clamp(15px, 3.5vw, 17px)',
                    fontWeight: isSelected ? '600' : '500',
                    lineHeight: '1.5',
                    flex: 1
                  }}>{option}</span>
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: 'linear-gradient(180deg, #ee7441 0%, #d65a2f 100%)'
                    }} />
                  )}
                </label>
              );
            })}
          </div>

          {/* Answer Feedback */}
          {answerFeedback.show && (
            <div style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: answerFeedback.isCorrect ? '#065f46' : '#dc2626',
              borderRadius: '8px',
              position: 'relative'
            }}>
              <button
                onClick={() => setAnswerFeedback({ show: false, isCorrect: false, explanation: '' })}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  padding: '0',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>
              <h3 style={{
                 color: 'white',
                 fontSize: '16px',
                 fontWeight: '600',
                 margin: '0 0 10px 0'
               }}>
                 {answerFeedback.isCorrect ? '✓ Great, that was the correct answer!' : '✗ Oops, that\'s not the correct answer...'}
               </h3>
               <p style={{
                 color: 'white',
                 fontSize: '14px',
                 margin: 0,
                 lineHeight: '1.5'
               }}>
                 {answerFeedback.explanation}
               </p>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 'clamp(16px, 4vw, 20px)',
          flexWrap: 'wrap'
        }}>
          {currentQuestionIndex === selectedQuestions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={!allQuestionsAnswered}
              style={{
                padding: 'clamp(12px, 3vw, 16px) clamp(32px, 8vw, 48px)',
                background: allQuestionsAnswered 
                  ? 'linear-gradient(135deg, #ee7441 0%, #d65a2f 100%)' 
                  : 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)',
                color: 'white',
                border: 'none',
                borderRadius: 'clamp(12px, 3vw, 16px)',
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: '700',
                cursor: allQuestionsAnswered ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                boxShadow: allQuestionsAnswered 
                  ? '0 8px 25px rgba(238, 116, 65, 0.3)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.025em',
                textTransform: 'uppercase',
                minHeight: '44px',
                minWidth: '120px'
              }}
              onMouseOver={(e) => {
                if (allQuestionsAnswered) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(238, 116, 65, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                if (allQuestionsAnswered) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(238, 116, 65, 0.3)';
                }
              }}
            >
              🎯 Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              style={{
                padding: 'clamp(12px, 3vw, 16px) clamp(32px, 8vw, 48px)',
                background: 'linear-gradient(135deg, #ee7441 0%, #d65a2f 100%)',
                color: 'white',
                border: 'none',
                borderRadius: 'clamp(12px, 3vw, 16px)',
                fontSize: 'clamp(16px, 4vw, 18px)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(238, 116, 65, 0.3)',
                letterSpacing: '0.025em',
                minHeight: '44px',
                minWidth: '120px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(238, 116, 65, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(238, 116, 65, 0.3)';
              }}
            >
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;