import React from 'react';

interface IntroScreenProps {
  onStartQuiz: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStartQuiz }) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFF7EE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(15px, 4vw, 20px)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 'clamp(12px, 3vw, 24px)',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 60px)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(238, 116, 65, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }} />
        
        {/* Icon/Illustration */}
        <div style={{ marginBottom: 'clamp(25px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: 'clamp(80px, 15vw, 120px)',
            height: 'clamp(80px, 15vw, 120px)',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #fef7f0 0%, #fff7ed 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #ee7441',
            boxShadow: '0 20px 40px rgba(238, 116, 65, 0.2)',
            position: 'relative'
          }}>
            <svg 
              width="clamp(40, 8vw, 60)" 
              height="clamp(40, 8vw, 60)" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ee7441" 
              strokeWidth="2.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            
          </div>
        </div>

        {/* Title */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: '#fef7f0',
            borderRadius: '50px',
            border: '1px solid #fed7aa',
            marginBottom: '24px'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#ea580c',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              🛡️ AI Security Training
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 6vw, 42px)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #ee7441 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'clamp(18px, 4vw, 28px)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Welcome to Xionite's Deepfake Awareness Platform
          </h1>
        </div>

        {/* Description */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: 'clamp(16px, 3.5vw, 20px)',
            color: '#4b5563',
            marginBottom: 'clamp(30px, 6vw, 48px)',
            lineHeight: '1.7',
            fontWeight: '500',
            maxWidth: '500px',
            margin: '0 auto clamp(30px, 6vw, 48px) auto',
            padding: '0 clamp(5px, 2vw, 10px)'
          }}>
            Master the art of deepfake detection and protect yourself, your organization, and others from AI-generated deception.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#ee7441',
                marginBottom: '4px'
              }}>10</div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Questions</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#ee7441',
                marginBottom: '4px'
              }}>5-7</div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Minutes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#ee7441',
                marginBottom: '4px'
              }}>✓</div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>Instant Results</div>
            </div>
          </div>
        </div>

        {/* Begin Quiz Button */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <button
            onClick={onStartQuiz}
            style={{
              padding: 'clamp(16px, 3vw, 20px) clamp(32px, 8vw, 48px)',
              background: 'linear-gradient(135deg, #ee7441 0%, #d65a2f 100%)',
              color: 'white',
              border: 'none',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              fontSize: 'clamp(16px, 3.5vw, 20px)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 12px 30px rgba(238, 116, 65, 0.4)',
              letterSpacing: '0.025em',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(238, 116, 65, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(238, 116, 65, 0.4)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}> Begin Your Training</span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              transition: 'left 0.6s ease'
            }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;