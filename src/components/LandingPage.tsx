import React from 'react';

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFF7EE 0%, #F3E8D3 100%)',
      padding: 'clamp(20px, 6vw, 60px) clamp(10px, 3vw, 20px)',
      fontFamily: '\'Inter\', \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '1200px', textAlign: 'center', margin: '0 auto', width: '100%' }}>
        {/* Hero Section */}
        <div style={{ marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          <div style={{
            display: 'inline-block',
            padding: 'clamp(6px, 1.5vw, 8px) clamp(15px, 4vw, 20px)',
            backgroundColor: 'rgba(238, 116, 65, 0.1)',
            borderRadius: '50px',
            marginBottom: 'clamp(20px, 4vw, 32px)',
            border: '1px solid rgba(238, 116, 65, 0.2)'
          }}>
            <span style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              fontWeight: '600',
              color: '#ee7441',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              🛡️ AI Security Training
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: 'clamp(20px, 4vw, 32px)',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Master Deepfake Detection
            <br />
            <span style={{ color: '#ee7441' }}>Protect Your Future</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#4b5563',
            marginBottom: 'clamp(30px, 6vw, 48px)',
            maxWidth: '700px',
            margin: '0 auto clamp(30px, 6vw, 48px) auto',
            padding: '0 clamp(10px, 3vw, 20px)',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Join thousands learning to identify AI-generated content. Build critical skills to protect yourself and your organization from sophisticated digital deception.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(20px, 4vw, 32px)',
          marginBottom: 'clamp(40px, 8vw, 80px)',
          maxWidth: '1000px',
          margin: '0 auto clamp(40px, 8vw, 80px) auto'
        }}>
          <div 
            style={{
              backgroundColor: 'white',
              padding: 'clamp(30px, 6vw, 48px) clamp(20px, 4vw, 36px)',
              borderRadius: 'clamp(16px, 3vw, 24px)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div style={{
              width: 'clamp(60px, 10vw, 80px)',
              height: 'clamp(60px, 10vw, 80px)',
              margin: '0 auto clamp(20px, 4vw, 28px) auto',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 style={{
               fontSize: 'clamp(20px, 4vw, 24px)',
               fontWeight: '700',
               color: '#1f2937',
               marginBottom: 'clamp(12px, 2.5vw, 16px)',
               lineHeight: '1.3'
             }}>
               Interactive Learning
             </h3>
            <p style={{
              color: '#4b5563',
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: '1.7',
              margin: 0,
              fontWeight: '400'
            }}>
              Take our comprehensive quiz to test your deepfake detection skills and learn new techniques.
            </p>
          </div>

          <div 
            style={{
              backgroundColor: 'white',
              padding: '48px 36px',
              borderRadius: '24px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 28px auto',
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(34, 197, 94, 0.15)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 style={{
              fontSize: 'clamp(20px, 4vw, 24px)',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: 'clamp(12px, 2.5vw, 16px)',
              lineHeight: '1.3'
            }}>
              Stay Protected
            </h3>
            <p style={{
              color: '#4b5563',
              fontSize: '18px',
              lineHeight: '1.7',
              margin: 0,
              fontWeight: '400'
            }}>
              Increase your awareness to protect yourself, your organization, and others from deepfake threats.
            </p>
          </div>

          <div 
            style={{
              backgroundColor: 'white',
              padding: '48px 36px',
              borderRadius: '24px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 28px auto',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.15)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '16px',
              lineHeight: '1.3'
            }}>
              Quick & Easy
            </h3>
            <p style={{
              color: '#4b5563',
              fontSize: '18px',
              lineHeight: '1.7',
              margin: 0,
              fontWeight: '400'
            }}>
              No registration required. Start immediately with our 10-question randomized quiz format.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onStartQuiz}
            style={{
              background: 'linear-gradient(135deg, #ee7441 0%, #d97706 100%)',
              color: 'white',
              border: 'none',
              padding: 'clamp(16px, 3vw, 20px) clamp(32px, 6vw, 48px)',
              fontSize: 'clamp(18px, 3.5vw, 20px)',
              fontWeight: '700',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 32px rgba(238, 116, 65, 0.3)',
              marginBottom: 'clamp(16px, 3vw, 24px)',
              position: 'relative',
              overflow: 'hidden',
              textTransform: 'none',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #d97706 0%, #b45309 100%)';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(238, 116, 65, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #ee7441 0%, #d97706 100%)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(238, 116, 65, 0.3)';
            }}
          >
            Start Your Deepfake Training
          </button>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: 'clamp(12px, 2.5vw, 16px)',
            padding: '0 clamp(10px, 2vw, 20px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: 'clamp(14px, 2.5vw, 16px)',
              color: '#4b5563',
              fontWeight: '500'
            }}>
              <span style={{ color: '#10b981' }}>✓</span>
              5-10 minutes
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              color: '#4b5563',
              fontWeight: '500'
            }}>
              <span style={{ color: '#10b981' }}>✓</span>
              No registration
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              color: '#4b5563',
              fontWeight: '500'
            }}>
              <span style={{ color: '#10b981' }}>✓</span>
              Instant results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;