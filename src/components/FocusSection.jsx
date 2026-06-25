import { useEffect, useRef, useState } from 'react';

export const FocusSection = ({
  id,
  eyebrow,
  headline,
  pain,
  steps = [],
  ctaLabel = 'Get pricing',
  mediaType = 'video',
  children,
  background = 'navy'
}) => {
  const isLight = background === 'navy-light';
  const bgColor = isLight ? '#0D2F4A' : '#0B2545';
  const mediaRef = useRef(null);
  const [mediaLoaded, setMediaLoaded] = useState(false);

  // Lazy-load media with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMediaLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  return (
    <section
      id={id}
      className="focus-section"
      style={{
        background: bgColor,
        scrollMarginTop: '80px',
        position: 'relative',
      }}
    >
      <style>{`
        .focus-section[data-focus-highlight="true"] {
          border-left: 2px solid #C9A961;
        }

        @media (prefers-reduced-motion: no-preference) {
          .focus-section[data-focus-highlight="true"] {
            animation: fadeBorder 2.5s ease-out forwards;
          }

          @keyframes fadeBorder {
            0% {
              border-left-color: #C9A961;
            }
            100% {
              border-left-color: rgba(201, 169, 97, 0);
            }
          }
        }

        .focus-section {
          border-top: 1px solid rgba(201, 169, 97, 0.1);
        }

        .media-wrapper {
          opacity: 0;
        }

        .media-wrapper.loaded {
          animation: fadeInMedia 0.5s ease-out forwards;
        }

        @keyframes fadeInMedia {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Responsive grid */
        @media (max-width: 768px) {
          .focus-grid {
            grid-template-columns: 1fr !important;
            padding: 60px 24px !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .focus-grid {
            padding: 40px 16px !important;
            gap: 30px !important;
          }
        }

        /* Keyboard focus outline */
        .focus-section button:focus-visible {
          outline: 2px solid #C9A961;
          outline-offset: 2px;
        }

        .focus-section a:focus-visible {
          outline: 2px solid #C9A961;
          outline-offset: 2px;
        }
      `}</style>

      <div
        className="focus-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '60px',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 40px',
          alignItems: 'start',
        }}
      >
        {/* Story Arc - Left */}
        <div>
          <div
            style={{
              fontSize: '12px',
              fontFamily: 'Outfit, sans-serif',
              color: '#C9A961',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px',
              opacity: 0.8,
            }}
            role="doc-subtitle"
          >
            {eyebrow}
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              color: '#F0EDE6',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            {headline}
          </h2>

          <p
            style={{
              fontSize: '16px',
              fontFamily: 'Outfit, sans-serif',
              color: '#F0EDE6',
              marginBottom: '30px',
              opacity: 0.6,
              lineHeight: 1.6,
            }}
          >
            {pain}
          </p>

          {/* How It Works Steps */}
          {steps.length > 0 && (
            <ol
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '30px 0',
              }}
            >
              {steps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    {/* Step Number Circle */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        minWidth: '32px',
                        borderRadius: '50%',
                        border: '2px solid #C9A961',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#C9A961',
                        marginTop: '2px',
                        flexShrink: 0,
                      }}
                      aria-label={`Step ${step.num}`}
                    >
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 600,
                          color: '#C9A961',
                          marginBottom: '4px',
                          margin: 0,
                          paddingBottom: '4px',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          fontFamily: 'Outfit, sans-serif',
                          color: '#F0EDE6',
                          opacity: 0.7,
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {/* CTA Button */}
          <button
            onClick={() => {
              window.location.href = '/pricing';
            }}
            style={{
              background: '#C9A961',
              color: '#0B2545',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '24px',
              fontSize: '14px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '20px',
              transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (!prefersReducedMotion) {
                e.target.style.background = '#D4B896';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!prefersReducedMotion) {
                e.target.style.background = '#C9A961';
                e.target.style.transform = 'translateY(0)';
              }
            }}
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </button>
        </div>

        {/* Media Slot - Right */}
        <div
          ref={mediaRef}
          className={`media-wrapper ${mediaLoaded ? 'loaded' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
          }}
        >
          {children ? (
            <div
              style={{
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201, 169, 97, 0.2)',
              }}
            >
              {children}
            </div>
          ) : mediaLoaded ? (
            <div
              style={{
                width: '100%',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                position: 'relative',
                background: 'linear-gradient(135deg, #C9A961 0%, #0B2545 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F0EDE6',
                fontSize: '18px',
                fontFamily: 'Outfit, sans-serif',
                border: '1px solid rgba(201, 169, 97, 0.2)',
              }}
            >
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                {mediaType === 'video' && '▶ Video (16:9)'}
                {mediaType === 'image' && '🖼 Image'}
                {mediaType === 'interactive' && '⚡ Interactive'}
              </div>
            </div>
          ) : (
            <div
              style={{
                width: '100%',
                paddingBottom: '56.25%',
                position: 'relative',
                background: 'rgba(201, 169, 97, 0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C9A961',
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                border: '1px solid rgba(201, 169, 97, 0.2)',
              }}
            >
              <div style={{ position: 'absolute' }}>Loading...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
