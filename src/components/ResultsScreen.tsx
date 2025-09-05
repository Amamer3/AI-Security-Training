import React from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100)
  
  const getEncouragingMessage = () => {
    if (percentage >= 90) return "Excellent! You're a deepfake detection expert!";
    if (percentage >= 80) return "Great job! You have strong deepfake awareness.";
    if (percentage >= 70) return "Good work! You're improving your deepfake knowledge.";
    if (percentage >= 60) return "Not bad! Keep learning about deepfake detection.";
    return "Keep practicing! Every step improves your deepfake awareness.";
  };

  const shareText = `I scored ${score}/${totalQuestions} on the Xionite Deepfake Awareness Quiz!`;
  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    let url = ''
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const downloadShareableImage = () => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;
    
    // Background
    ctx.fillStyle = '#FFF7EE';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Main card background
    ctx.fillStyle = 'white';
    ctx.roundRect(50, 50, canvas.width - 100, canvas.height - 100, 20);
    ctx.fill();
    
    // Title
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Deepfake Awareness Quiz', canvas.width / 2, 150);
    
    // Score
    ctx.fillStyle = '#ee7441';
    ctx.font = 'bold 72px Arial';
    ctx.fillText(`${score}/${totalQuestions}`, canvas.width / 2, 280);
    
    // Percentage
    ctx.fillStyle = '#6b7280';
    ctx.font = '36px Arial';
    ctx.fillText(`${percentage}%`, canvas.width / 2, 340);
    
    // Message
    ctx.fillStyle = '#374151';
    ctx.font = '24px Arial';
    ctx.fillText(getEncouragingMessage(), canvas.width / 2, 420);
    
    // Xionite branding
    ctx.fillStyle = '#9ca3af';
    ctx.font = '20px Arial';
    ctx.fillText('Xionite Deepfake Awareness Training', canvas.width / 2, 500);
    
    // Download the image
    const link = document.createElement('a');
    link.download = `deepfake-quiz-score-${score}-${totalQuestions}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

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
        backgroundColor: 'white',
        borderRadius: 'clamp(12px, 3vw, 24px)',
        padding: 'clamp(30px, 8vw, 60px) clamp(25px, 6vw, 50px)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(238, 116, 65, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
          borderRadius: '50%',
          filter: 'blur(25px)'
        }} />
        
        {/* Score Display */}
        <div style={{ marginBottom: '48px', position: 'relative', zIndex: 1 }}>
          {/* Achievement Badge */}
          <div style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: percentage >= 80 
              ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
              : percentage >= 60 
                ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
            borderRadius: '50px',
            marginBottom: '24px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{
              fontSize: '16px',
              fontWeight: '700',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {percentage >= 90 ? '🏆 Expert' : percentage >= 80 ? '🥇 Advanced' : percentage >= 70 ? '🥈 Proficient' : percentage >= 60 ? '🥉 Learning' : '♦️Beginner'}
            </span>
          </div>
          
          <div style={{
            fontSize: 'clamp(48px, 12vw, 80px)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #ee7441 0%, #d65a2f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'clamp(8px, 2vw, 12px)',
            letterSpacing: '-0.02em'
          }}>
            {score}/{totalQuestions}
          </div>
          <div style={{
            fontSize: 'clamp(24px, 6vw, 36px)',
            fontWeight: '700',
            color: '#6b7280',
            marginBottom: 'clamp(16px, 4vw, 24px)'
          }}>
            {percentage}%
          </div>
          <h2 style={{
            fontSize: 'clamp(18px, 4vw, 24px)',
            fontWeight: '700',
            color: '#1f2937',
            margin: 0,
            lineHeight: '1.3',
            letterSpacing: '-0.025em',
            padding: '0 clamp(5px, 2vw, 10px)'
          }}>
            {getEncouragingMessage()}
          </h2>
        </div>

        {/* Social Sharing */}
        <div style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '24px',
            letterSpacing: '-0.025em'
          }}>
            🎉 Share Your Achievement
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 'clamp(12px, 3vw, 16px)',
            marginBottom: 'clamp(16px, 4vw, 24px)'
          }}>
            <button
              onClick={() => handleShare('twitter')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 3vw, 14px) clamp(12px, 4vw, 20px)',
                background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: 'clamp(13px, 3vw, 15px)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(29, 161, 242, 0.3)',
                minHeight: '44px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(29, 161, 242, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 161, 242, 0.3)';
              }}
            >
              {/* <span style={{ marginRight: '8px' }}>🐦</span> */}
              Twitter
            </button>
            
            <button
              onClick={() => handleShare('linkedin')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 3vw, 14px) clamp(12px, 4vw, 20px)',
                background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: 'clamp(13px, 3vw, 15px)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(0, 119, 181, 0.3)',
                minHeight: '44px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 119, 181, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 119, 181, 0.3)';
              }}
            >
              {/* <span style={{ marginRight: '8px' }}>💼</span> */}
              LinkedIn
            </button>
            
            <button
              onClick={() => handleShare('facebook')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 3vw, 14px) clamp(12px, 4vw, 20px)',
                background: 'linear-gradient(135deg, #1877f2 0%, #166fe5 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: 'clamp(13px, 3vw, 15px)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(24, 119, 242, 0.3)',
                minHeight: '44px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(24, 119, 242, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(24, 119, 242, 0.3)';
              }}
            >
              {/* <span style={{ marginRight: '8px' }}>📘</span> */}
              Facebook
            </button>
            
            <button
              onClick={() => handleShare('whatsapp')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 3vw, 14px) clamp(12px, 4vw, 20px)',
                background: 'linear-gradient(135deg, #25d366 0%, #20ba5a 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: 'clamp(13px, 3vw, 15px)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
                minHeight: '44px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.3)';
              }}
            >
              {/* <span style={{ marginRight: '8px' }}>💬</span> */}
              WhatsApp
            </button>
          </div>
          
          <button
            onClick={downloadShareableImage}
            style={{
              width: '100%',
              padding: 'clamp(14px, 4vw, 18px) clamp(20px, 6vw, 28px)',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: 'clamp(15px, 4vw, 17px)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
              letterSpacing: '0.025em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(16px, 4vw, 20px)',
              minHeight: '52px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(99, 102, 241, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3)';
            }}
          >
            Download Shareable Image
          </button>

          <button
            onClick={onRestart}
            style={{
              width: '100%',
              padding: 'clamp(14px, 4vw, 18px) clamp(20px, 6vw, 28px)',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: 'clamp(15px, 4vw, 17px)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
              letterSpacing: '0.025em',
              textTransform: 'uppercase',
              minHeight: '52px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(16, 185, 129, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.3)';
            }}
          >
            🔄 Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;