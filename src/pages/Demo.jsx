import { useFocusScroll } from '../hooks/useFocusScroll';
import { FocusSection } from '../components/FocusSection';

export const Demo = () => {
  useFocusScroll();

  const focusSections = [
    {
      id: 'loss-revenue-leverage',
      eyebrow: 'Loss Revenue Prevention',
      headline: 'Stop Leaving Money on the Table',
      pain: 'Businesses without always-on systems lose bookings and revenue daily. Missed calls, unanswered emails, forgotten inquiries.',
      steps: [
        { num: 1, title: 'Identify Leaks', desc: 'We audit where your leads disappear' },
        { num: 2, title: 'Capture Always-On', desc: 'Your business works 24/7, even when you\'re not' },
        { num: 3, title: 'Convert Silently', desc: 'More bookings, lower manual effort' },
      ],
    },
    {
      id: 'tour-to-booking',
      eyebrow: 'Always-On Sales Engine',
      headline: 'The Virtual Tour That Converts',
      pain: 'Prospects want to see your space before they commit. Without it, they book your competitor instead.',
      steps: [
        { num: 1, title: 'Digitize', desc: 'We capture your space in 3D or 360 photography' },
        { num: 2, title: 'Deploy', desc: 'That tour lives on your website, 24/7, explorable' },
        { num: 3, title: 'Convert', desc: 'Prospects tour at their pace, then book' },
      ],
    },
    {
      id: 'always-on-operations',
      eyebrow: 'Automation',
      headline: 'Your Business Works 24/7, Even When You Don\'t',
      pain: 'Manual admin drains your team. Calls missed, emails pile up, follow-ups forgotten. Same team, only half productive.',
      steps: [
        { num: 1, title: 'Connect', desc: 'Calendar, email, CRM linked to always-on systems' },
        { num: 2, title: 'Automate', desc: 'Inquiries auto-route, responses trigger, follow-ups run' },
        { num: 3, title: 'Scale', desc: 'Same team, 3x capacity. Manual work drops 60%' },
      ],
    },
    {
      id: 'always-on-authority',
      eyebrow: 'Authority Building',
      headline: 'Become the Authority in Your Market',
      pain: 'Your website is static. Generic. Outdated. Prospects land, see nothing unique, and leave. Your competitor gets the deal.',
      steps: [
        { num: 1, title: 'Audit', desc: 'We capture your brand, story, and differentiators' },
        { num: 2, title: 'Build', desc: 'Authority page that shows proof, not features' },
        { num: 3, title: 'Convert', desc: 'Higher close rates. Prospects pre-convinced.' },
      ],
    },
    {
      id: 'social-avatar',
      eyebrow: 'Digital Presence',
      headline: 'Your Digital Presence, Always On, Always Speaking',
      pain: 'You\'re on social, but it\'s just you, posting when you remember. No consistency. Competitors crush you.',
      steps: [
        { num: 1, title: 'Create', desc: 'Digital avatar of you (video, voice, personality)' },
        { num: 2, title: 'Deploy', desc: 'That avatar posts and speaks 24/7, consistently' },
        { num: 3, title: 'Dominate', desc: 'Your voice becomes omnipresent on social' },
      ],
    },
    {
      id: 'reputation-flywheel',
      eyebrow: 'Reputation & Trust',
      headline: 'Build Reputation at Scale',
      pain: 'Your reputation is fragmented. Google, Facebook, reviews, word-of-mouth. No system. You\'re at the mercy of reviews.',
      steps: [
        { num: 1, title: 'Collect', desc: 'Reviews, testimonials, and wins systematically' },
        { num: 2, title: 'Distribute', desc: 'Social proof across web, email, social, ads' },
        { num: 3, title: 'Compound', desc: 'Reputation self-reinforces monthly' },
      ],
    },
    {
      id: 'product-photo',
      eyebrow: 'Visual Assets',
      headline: 'Show Your Work Like Never Before',
      pain: 'Your product looks amateur. Phone photos, bad lighting. Prospects judge quality by what they see. You lose deals.',
      steps: [
        { num: 1, title: 'Plan', desc: 'Professional shoot day (product, lifestyle, hero)' },
        { num: 2, title: 'Capture', desc: '50–100 gallery-quality images, all rights yours' },
        { num: 3, title: 'Deploy', desc: 'Images anchor your web, social, ads, proposals' },
      ],
    },
    {
      id: 'seasonal-shoots',
      eyebrow: 'Ongoing Content',
      headline: 'Stay Fresh and Relevant Year-Round',
      pain: 'Your content is evergreen, but your business is seasonal. Summer, holidays, spring—you need fresh shots every quarter.',
      steps: [
        { num: 1, title: 'Plan', desc: 'Quarterly shoots around your seasonality' },
        { num: 2, title: 'Shoot', desc: 'Fresh content every 3 months (new scenes, stories)' },
        { num: 3, title: 'Publish', desc: 'Website always feels current. Social stays hot.' },
      ],
    },
    {
      id: 'digital-twin',
      eyebrow: 'Scale Beyond Location',
      headline: 'Your Space, Digitized, Infinitely Scalable',
      pain: 'Your business is tied to your location. Clients must visit. You can\'t scale remotely. Growth is capped.',
      steps: [
        { num: 1, title: 'Clone', desc: 'Digitize your entire space and operations in 3D' },
        { num: 2, title: 'Deploy', desc: 'Prospects explore and interact without visiting' },
        { num: 3, title: 'Expand', desc: 'You reach national, even international clients' },
      ],
    },
    {
      id: 'conversion-os',
      eyebrow: 'Complete System',
      headline: 'The Complete Always-On System',
      pain: 'You don\'t want to choose one tactic. You need everything. The entire system. 24/7 presence + authority + automation.',
      steps: [
        { num: 1, title: 'Integrate', desc: 'Digital twin + authority + avatar + reputation + automation' },
        { num: 2, title: 'Compound', desc: 'Each piece feeds the others—compound growth' },
        { num: 3, title: 'Dominate', desc: 'Dominant position. Predictable revenue growth.' },
      ],
    },
  ];

  return (
    <div style={{ background: '#0B2545', color: '#F0EDE6', minHeight: '100vh' }}>
      {/* Sticky Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          background: '#0B2545',
          borderBottom: '1px solid rgba(201, 169, 97, 0.2)',
          zIndex: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            color: '#F0EDE6',
          }}
        >
          🟡 RSD
        </div>
        <button
          onClick={() => (window.location.href = '/pricing')}
          style={{
            background: '#C9A961',
            color: '#0B2545',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            fontSize: '12px',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#D4B896';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#C9A961';
          }}
        >
          Get pricing
        </button>
      </header>

      {/* Hero Section */}
      <section
        style={{
          marginTop: '64px',
          height: '100vh',
          padding: '80px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #0B2545 0%, #050a15 100%)',
          position: 'relative',
        }}
      >
        {/* Hero Text Left */}
        <div>
          <h1
            style={{
              fontSize: '72px',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              color: '#C9A961',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Three Leaks Killing Your Revenue
          </h1>

          <p
            style={{
              fontSize: '18px',
              fontFamily: 'Outfit, sans-serif',
              color: '#F0EDE6',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}
          >
            See what's quietly costing you, then see how to win it back.
          </p>

          {/* Three Pain Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            {[
              {
                title: 'Invisible Online',
                desc: 'Your business does amazing work, but nobody online knows it.',
              },
              {
                title: 'Lost Leads',
                desc: 'Calls missed every hour the office is closed.',
              },
              {
                title: 'No Authority',
                desc: 'Without proof, prospects trust you less than they should.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(5, 10, 21, 0.8)',
                  border: '1px solid rgba(201, 169, 97, 0.2)',
                  borderRadius: '8px',
                  padding: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      fontSize: '20px',
                      minWidth: '24px',
                    }}
                  >
                    🟡
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        color: '#C9A961',
                        marginBottom: '4px',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Outfit, sans-serif',
                        color: '#F0EDE6',
                        opacity: 0.7,
                        lineHeight: 1.5,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={() => (window.location.href = '/pricing')}
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
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#D4B896';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#C9A961';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get pricing
            </button>
            <button
              onClick={() => (window.location.href = '/book')}
              style={{
                background: 'transparent',
                color: '#C9A961',
                border: '1px solid #C9A961',
                padding: '12px 24px',
                borderRadius: '24px',
                fontSize: '14px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(201, 169, 97, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              Book a free audit
            </button>
          </div>
        </div>

        {/* Hero Video Slot Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '500px',
            background: 'linear-gradient(135deg, #C9A961 0%, #0B2545 100%)',
            borderRadius: '8px',
            fontSize: '24px',
            fontFamily: 'Outfit, sans-serif',
            textAlign: 'center',
            color: '#0B2545',
          }}
        >
          ▶ Hero Video (16:9)
        </div>
      </section>

      {/* Ten Focus Sections */}
      {focusSections.map((section, idx) => (
        <FocusSection
          key={section.id}
          {...section}
          background={idx % 2 === 0 ? 'navy' : 'navy-light'}
        />
      ))}

      {/* CTA Band Before Footer */}
      <section
        style={{
          background: '#C9A961',
          color: '#0B2545',
          padding: '60px 40px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '40px',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            marginBottom: '30px',
          }}
        >
          Ready to turn your reality into a 24/7 conversion engine?
        </h2>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => (window.location.href = '/pricing')}
            style={{
              background: '#0B2545',
              color: '#F0EDE6',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '24px',
              fontSize: '14px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Get pricing
          </button>
          <button
            onClick={() => (window.location.href = '/book')}
            style={{
              background: 'transparent',
              color: '#0B2545',
              border: '1px solid #0B2545',
              padding: '12px 32px',
              borderRadius: '24px',
              fontSize: '14px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(11, 37, 69, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
          >
            Book a free audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#0B2545',
          color: '#F0EDE6',
          padding: '60px 40px',
          textAlign: 'center',
          borderTop: '1px solid rgba(201, 169, 97, 0.2)',
        }}
      >
        <h3
          style={{
            fontSize: '24px',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            color: '#C9A961',
            marginBottom: '20px',
          }}
        >
          Digitizing Reality, Elevating Sales
        </h3>
        <div
          style={{
            fontSize: '14px',
            fontFamily: 'Outfit, sans-serif',
            opacity: 0.8,
            lineHeight: 1.8,
          }}
        >
          <p>info@realspacedigital.net</p>
          <p>(434) 215-4276</p>
          <p>realspacedigital.net</p>
        </div>
      </footer>
    </div>
  );
};
