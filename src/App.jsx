import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Demo } from './pages/Demo'
import './App.css'

function App() {
  // Route based on pathname
  const pathname = window.location.pathname

  if (pathname === '/demo') {
    return <Demo />
  }

  // Default landing page
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>RSD Demo Page</h1>
          <p>
            Navigate to <code>/demo</code> to view the demo page
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => window.location.href = '/demo'}
        >
          Go to Demo
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About This Build</h2>
          <p>Prompt A: Scaffold /demo Route</p>
          <ul>
            <li>✓ Sticky header with RSD logo and CTA</li>
            <li>✓ Hero section with 3 pain pillars</li>
            <li>✓ 10 focus sections with deep-link anchors</li>
            <li>✓ useFocusScroll hook for URL ?focus= parameter</li>
            <li>✓ FocusSection reusable component</li>
            <li>✓ Visual design aligned to calculator + qualify</li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Next Steps</h2>
          <p>Continue with Prompts B–J</p>
          <ul>
            <li>B: Refine FocusSection component</li>
            <li>C: Wire calculator deep-link</li>
            <li>D: Embed Matterport tours</li>
            <li>E: Service videos + schema</li>
            <li>F: Agent launcher, G: FAQ, H: JSON-LD, I: AEO, J: Copy</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
